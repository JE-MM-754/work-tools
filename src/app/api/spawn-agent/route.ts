import { NextRequest, NextResponse } from "next/server";
import { SpawnAgentRequest, SpawnAgentResponse, AgentMetadata } from "@/types/kanban";
import { getAgentConfig } from "@/lib/agent-config";
import { getTask, updateTask, moveTask } from "@/lib/store";

export async function POST(request: NextRequest): Promise<NextResponse<SpawnAgentResponse>> {
  try {
    const body: SpawnAgentRequest = await request.json();
    const { taskId, category, title, description } = body;

    const task = getTask(taskId);
    if (!task) {
      return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
    }

    const config = getAgentConfig(category);

    const agentMeta: AgentMetadata = {
      agentType: config.agentType,
      runtime: config.runtime,
      agentId: config.agentId,
      status: "spawning",
      startedAt: new Date().toISOString(),
      estimatedMinutes: config.estimatedMinutes,
      progress: 0,
    };

    updateTask(taskId, { agent: agentMeta });

    let sessionId: string | undefined;
    try {
      const openclawResponse = await spawnOpenClawAgent(config, title, description);
      sessionId = openclawResponse.sessionId;

      updateTask(taskId, {
        agent: { ...agentMeta, status: "running", sessionId, progress: 5 },
      });
      moveTask(taskId, "in-progress");
    } catch (spawnError) {
      sessionId = `sim-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

      updateTask(taskId, {
        agent: { ...agentMeta, status: "running", sessionId, progress: 5 },
      });
      moveTask(taskId, "in-progress");

      simulateAgentProgress(taskId, config.estimatedMinutes);
    }

    return NextResponse.json({
      success: true,
      sessionId,
      agentId: config.agentId,
    });
  } catch (error) {
    console.error("Error spawning agent:", error);
    return NextResponse.json(
      { success: false, error: "Failed to spawn agent" },
      { status: 500 }
    );
  }
}

async function spawnOpenClawAgent(
  config: ReturnType<typeof getAgentConfig>,
  title: string,
  description: string
): Promise<{ sessionId: string }> {
  const apiUrl = process.env.OPENCLAW_API_URL || "https://api.openclaw.io";
  const apiKey = process.env.OPENCLAW_API_KEY;

  if (!apiKey) {
    throw new Error("OpenClaw API key not configured");
  }

  const response = await fetch(`${apiUrl}/v1/sessions/spawn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      runtime: config.runtime,
      agentId: config.agentId,
      task: {
        title,
        description,
        type: config.agentType,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenClaw API error: ${response.status}`);
  }

  return response.json();
}

function simulateAgentProgress(taskId: string, estimatedMinutes: number) {
  const totalMs = estimatedMinutes * 60 * 1000;
  const intervalMs = Math.max(totalMs / 20, 2000);
  let progress = 5;

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      const task = getTask(taskId);
      if (task && task.agent) {
        updateTask(taskId, {
          agent: {
            ...task.agent,
            status: "complete",
            progress: 100,
            completedAt: new Date().toISOString(),
          },
        });
        moveTask(taskId, "review");
      }
      return;
    }

    const task = getTask(taskId);
    if (task && task.agent && task.agent.status === "running") {
      updateTask(taskId, {
        agent: { ...task.agent, progress },
      });
    } else {
      clearInterval(interval);
    }
  }, intervalMs);
}
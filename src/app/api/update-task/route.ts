import { NextRequest, NextResponse } from "next/server";
import { UpdateTaskRequest } from "@/types/kanban";
import { getTask, updateTask, moveTask, updateAgentStatus } from "@/lib/store";

export async function POST(request: NextRequest) {
  try {
    const body: UpdateTaskRequest = await request.json();
    const { taskId, columnId, agentStatus, progress, error } = body;

    const task = getTask(taskId);
    if (!task) {
      return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
    }

    if (columnId) {
      moveTask(taskId, columnId);
    }

    if (agentStatus) {
      updateAgentStatus(taskId, agentStatus, { progress, error });
    } else if (progress !== undefined && task.agent) {
      updateTask(taskId, {
        agent: { ...task.agent, progress },
      });
    }

    const updated = getTask(taskId);
    return NextResponse.json({ success: true, task: updated });
  } catch (err) {
    console.error("Error updating task:", err);
    return NextResponse.json({ success: false, error: "Failed to update task" }, { status: 500 });
  }
}
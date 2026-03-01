import { NextRequest, NextResponse } from 'next/server';
import { isOpenClawConfigured, spawnSession } from '@/lib/openclaw';

function getAgentConfig(project: string, tags: string[]) {
  const allTags = [...tags, project].map(t => t.toLowerCase());
  const isCode = allTags.some(t => ['code', 'development', 'engineering', 'pipeline', 'integration', 'api', 'deployment', 'architecture'].includes(t));
  if (isCode) return { runtime: 'acp', agentId: 'codex', agentType: 'Code Agent' };
  return { runtime: 'subagent', agentId: undefined, agentType: 'Research Agent' };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { taskId, title, description, project, tags } = body;
    if (!taskId || !title) return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    const config = getAgentConfig(project || '', tags || []);
    const prompt = `Task: ${title}\n\nDescription: ${description || 'No description'}\n\nProject: ${project || 'General'}\n\nExecute this task and provide results.`;
    if (!isOpenClawConfigured()) {
      const simId = `sim-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      return NextResponse.json({ success: true, sessionId: simId, agentType: config.agentType, runtime: config.runtime, simulated: true });
    }
    const result = await spawnSession({ runtime: config.runtime, agentId: config.agentId, prompt, taskId });
    return NextResponse.json({ success: true, sessionId: result.sessionId, agentType: config.agentType, runtime: config.runtime });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

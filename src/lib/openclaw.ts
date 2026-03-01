const OPENCLAW_API_URL = process.env.OPENCLAW_API_URL || '';
const OPENCLAW_AUTH_TOKEN = process.env.OPENCLAW_AUTH_TOKEN || '';

export function isOpenClawConfigured(): boolean {
  return !!(OPENCLAW_API_URL && OPENCLAW_AUTH_TOKEN);
}

async function openclawFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const url = `${OPENCLAW_API_URL}${path}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENCLAW_AUTH_TOKEN}`,
    ...(options.headers as Record<string, string> || {}),
  };

  let lastError: Error | null = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const resp = await fetch(url, { ...options, headers, signal: AbortSignal.timeout(15000) });
      if (resp.ok || resp.status < 500) return resp;
      lastError = new Error(`OpenClaw API error: ${resp.status}`);
    } catch (e) {
      lastError = e instanceof Error ? e : new Error(String(e));
    }
    if (attempt < 2) await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
  }
  throw lastError || new Error('OpenClaw API unreachable');
}

export async function spawnSession(params: {
  runtime: string;
  agentId?: string;
  prompt: string;
  taskId: string;
}): Promise<{ sessionId: string }> {
  const resp = await openclawFetch('/sessions_spawn', {
    method: 'POST',
    body: JSON.stringify({
      runtime: params.runtime,
      agent_id: params.agentId,
      prompt: params.prompt,
      metadata: { taskId: params.taskId },
    }),
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.error || 'Failed to spawn session');
  return { sessionId: data.session_id || data.sessionId || data.id };
}

export async function getSessionStatus(sessionId: string): Promise<{
  status: 'running' | 'paused' | 'completed' | 'error';
  progress?: number;
  output?: string;
  error?: string;
}> {
  const resp = await openclawFetch(`/subagents/${sessionId}`);
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.error || 'Failed to get session status');
  return {
    status: mapStatus(data.status || data.state),
    progress: data.progress,
    output: data.output || data.result,
    error: data.error,
  };
}

export async function listActiveSessions(): Promise<Array<{
  sessionId: string;
  status: string;
  metadata?: Record<string, unknown>;
}>> {
  const resp = await openclawFetch('/subagents');
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.error || 'Failed to list sessions');
  const sessions = Array.isArray(data) ? data : data.sessions || data.agents || [];
  return sessions.map((s: Record<string, unknown>) => ({
    sessionId: String(s.session_id || s.sessionId || s.id),
    status: String(s.status || s.state || 'unknown'),
    metadata: (s.metadata || {}) as Record<string, unknown>,
  }));
}

export async function controlSession(sessionId: string, action: 'pause' | 'cancel' | 'resume'): Promise<void> {
  const resp = await openclawFetch(`/subagents/${sessionId}/${action}`, { method: 'POST' });
  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    throw new Error((data as Record<string, string>).error || `Failed to ${action} session`);
  }
}

function mapStatus(raw: string): 'running' | 'paused' | 'completed' | 'error' {
  const s = (raw || '').toLowerCase();
  if (s === 'completed' || s === 'done' || s === 'finished' || s === 'success') return 'completed';
  if (s === 'error' || s === 'failed' || s === 'crashed') return 'error';
  if (s === 'paused' || s === 'suspended') return 'paused';
  return 'running';
}

import { NextRequest, NextResponse } from 'next/server';
import { isOpenClawConfigured, getSessionStatus } from '@/lib/openclaw';

export async function GET(request: NextRequest) {
  try {
    const sessionIds = request.nextUrl.searchParams.get('sessionIds');
    if (!sessionIds) return NextResponse.json({ sessions: [] });
    const ids = sessionIds.split(',').filter(Boolean);
    const sessions = [];
    for (const sessionId of ids) {
      try {
        if (!isOpenClawConfigured() || sessionId.startsWith('sim-')) {
          sessions.push({ sessionId, status: 'running', progress: Math.min(95, Math.floor(Math.random() * 30) + 20) });
          continue;
        }
        const status = await getSessionStatus(sessionId);
        sessions.push({ sessionId, ...status });
      } catch {
        sessions.push({ sessionId, status: 'error', error: 'Failed to fetch status' });
      }
    }
    return NextResponse.json({ sessions });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ sessions: [], error: message }, { status: 500 });
  }
}

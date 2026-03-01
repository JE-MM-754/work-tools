import { NextRequest, NextResponse } from 'next/server';
import { isOpenClawConfigured, controlSession } from '@/lib/openclaw';

export async function POST(request: NextRequest) {
  try {
    const { sessionId, action } = await request.json();
    if (!sessionId || !action) return NextResponse.json({ success: false, error: 'Missing sessionId or action' }, { status: 400 });
    if (!['pause', 'cancel', 'resume', 'retry'].includes(action)) return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
    if (!isOpenClawConfigured() || sessionId.startsWith('sim-')) {
      const statusMap: Record<string, string> = { pause: 'paused', cancel: 'cancelled', resume: 'running', retry: 'running' };
      return NextResponse.json({ success: true, newStatus: statusMap[action], simulated: true });
    }
    if (action === 'retry') return NextResponse.json({ success: true, newStatus: 'retry', message: 'Use spawn-agent to create a new session' });
    await controlSession(sessionId, action as 'pause' | 'cancel' | 'resume');
    return NextResponse.json({ success: true, newStatus: action === 'cancel' ? 'cancelled' : action === 'pause' ? 'paused' : 'running' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

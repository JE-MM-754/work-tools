import { NextRequest, NextResponse } from 'next/server';

interface UpdateTaskRequest {
  taskId: string;
  status?: 'ideas' | 'start' | 'inProgress' | 'complete';
  progress?: number;
  message?: string;
  agentSessionId?: string;
}

// In-memory store for task states (in production, use a database)
const taskStates = new Map<string, {
  status: string;
  progress: number;
  message: string;
  agentSessionId?: string;
  lastUpdated: number;
}>();

export async function POST(request: NextRequest) {
  try {
    const body: UpdateTaskRequest = await request.json();
    const { taskId, status, progress, message, agentSessionId } = body;
    
    console.log(`📝 Updating task ${taskId}:`, { status, progress, message });
    
    // Get current task state or create new one
    const currentState = taskStates.get(taskId) || {
      status: 'ideas',
      progress: 0,
      message: '',
      lastUpdated: Date.now()
    };
    
    // Update the task state
    const updatedState = {
      ...currentState,
      ...(status && { status }),
      ...(progress !== undefined && { progress }),
      ...(message && { message }),
      ...(agentSessionId && { agentSessionId }),
      lastUpdated: Date.now()
    };
    
    taskStates.set(taskId, updatedState);
    
    console.log(`✅ Task ${taskId} updated successfully`);
    
    return NextResponse.json({ 
      success: true, 
      taskState: updatedState
    });
    
  } catch (error) {
    console.error('❌ Task update failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const taskId = searchParams.get('taskId');
    
    if (!taskId) {
      return NextResponse.json({ 
        success: false, 
        error: 'taskId is required'
      }, { status: 400 });
    }
    
    const taskState = taskStates.get(taskId);
    
    if (!taskState) {
      return NextResponse.json({ 
        success: false, 
        error: 'Task not found'
      }, { status: 404 });
    }
    
    return NextResponse.json({ 
      success: true, 
      taskState 
    });
    
  } catch (error) {
    console.error('❌ Task state retrieval failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
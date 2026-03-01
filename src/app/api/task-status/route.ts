import { NextRequest, NextResponse } from 'next/server';

interface TaskStatusResponse {
  taskId: string;
  status: 'ideas' | 'start' | 'inProgress' | 'complete';
  progress: number;
  message: string;
  agentSessionId?: string;
  agentStatus?: 'running' | 'completed' | 'error' | 'paused';
  lastUpdated: number;
}

// Mock task status store (in production, use database)
const taskStatusStore = new Map<string, TaskStatusResponse>();

// Mock function to check OpenClaw agent status
const checkOpenClawAgentStatus = async (sessionId: string): Promise<'running' | 'completed' | 'error' | 'paused'> => {
  const openclawApiUrl = process.env.OPENCLAW_API_URL;
  const openclawApiKey = process.env.OPENCLAW_API_KEY;
  
  if (!openclawApiUrl || !openclawApiKey) {
    // Demo mode - simulate agent status
    const progress = Math.random() * 100;
    if (progress < 100) return 'running';
    return 'completed';
  }
  
  try {
    const response = await fetch(`${openclawApiUrl}/sessions/${sessionId}/status`, {
      headers: {
        'Authorization': `Bearer ${openclawApiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      return 'error';
    }
    
    const data = await response.json();
    return data.status || 'running';
  } catch (error) {
    console.error('Error checking agent status:', error);
    return 'error';
  }
};

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
    
    // Get task status from store
    let taskStatus = taskStatusStore.get(taskId);
    
    if (!taskStatus) {
      // Initialize default status if not found
      taskStatus = {
        taskId,
        status: 'ideas',
        progress: 0,
        message: 'Task not started',
        lastUpdated: Date.now()
      };
      taskStatusStore.set(taskId, taskStatus);
    }
    
    // If there's an agent session, check its status
    if (taskStatus.agentSessionId) {
      const agentStatus = await checkOpenClawAgentStatus(taskStatus.agentSessionId);
      taskStatus.agentStatus = agentStatus;
      
      // Update task status based on agent status
      if (agentStatus === 'completed' && taskStatus.status !== 'complete') {
        taskStatus.status = 'complete';
        taskStatus.progress = 100;
        taskStatus.message = 'Agent completed the task successfully';
        taskStatus.lastUpdated = Date.now();
        taskStatusStore.set(taskId, taskStatus);
      } else if (agentStatus === 'error') {
        taskStatus.message = 'Agent encountered an error';
        taskStatus.lastUpdated = Date.now();
        taskStatusStore.set(taskId, taskStatus);
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      ...taskStatus
    });
    
  } catch (error) {
    console.error('❌ Task status check failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: Partial<TaskStatusResponse> = await request.json();
    const { taskId } = body;
    
    if (!taskId) {
      return NextResponse.json({ 
        success: false, 
        error: 'taskId is required'
      }, { status: 400 });
    }
    
    // Update task status
    const existingStatus = taskStatusStore.get(taskId);
    const updatedStatus: TaskStatusResponse = {
      taskId,
      status: 'ideas',
      progress: 0,
      message: '',
      lastUpdated: Date.now(),
      ...existingStatus,
      ...body
    };
    
    // Ensure lastUpdated is current
    updatedStatus.lastUpdated = Date.now();
    
    taskStatusStore.set(taskId, updatedStatus);
    
    console.log(`✅ Task status updated for ${taskId}`);
    
    return NextResponse.json({ 
      success: true, 
      ...updatedStatus
    });
    
  } catch (error) {
    console.error('❌ Task status update failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
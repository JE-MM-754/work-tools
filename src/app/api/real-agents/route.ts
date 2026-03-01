import { NextRequest, NextResponse } from 'next/server';

interface OpenClawSubagent {
  index: number;
  runId: string;
  sessionKey: string;
  label: string;
  task: string;
  status: 'running' | 'completed' | 'error' | 'paused';
  runtime: string;
  runtimeMs: number;
  model: string;
  totalTokens?: number;
  startedAt: number;
}

interface KanbanTask {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  project: string;
  tags: string[];
  status: 'ideas' | 'start' | 'inProgress' | 'complete';
  agentSessionId?: string;
  agentStatus?: 'running' | 'completed' | 'error' | 'paused';
  progress?: number;
  agentMessage?: string;
  lastUpdated?: number;
  runtime?: string;
  totalTokens?: number;
}

// Map OpenClaw subagent to Kanban task
const mapSubagentToTask = (subagent: OpenClawSubagent): KanbanTask => {
  const project = inferProject(subagent.task);
  const tags = inferTags(subagent.task);
  const priority = inferPriority(subagent.task);
  
  return {
    id: subagent.runId,
    title: subagent.label,
    description: subagent.task,
    priority,
    project,
    tags,
    status: subagent.status === 'running' ? 'inProgress' : 
            subagent.status === 'completed' ? 'complete' : 'inProgress',
    agentSessionId: subagent.sessionKey,
    agentStatus: subagent.status,
    progress: subagent.status === 'completed' ? 100 : 
              subagent.status === 'running' ? Math.min(75, (subagent.runtimeMs / (10 * 60 * 1000)) * 100) : 0,
    agentMessage: `${subagent.status} • ${subagent.runtime} • ${formatTokens(subagent.totalTokens)}`,
    lastUpdated: Date.now(),
    runtime: subagent.runtime,
    totalTokens: subagent.totalTokens
  };
};

// Infer project from task description
const inferProject = (task: string): string => {
  if (task.toLowerCase().includes('cinchit') || task.toLowerCase().includes('cinch-it')) {
    return 'CinchIT';
  }
  if (task.toLowerCase().includes('truefoundry') || task.toLowerCase().includes('true foundry')) {
    return 'Job Search';
  }
  if (task.toLowerCase().includes('fractional') || task.toLowerCase().includes('ceo')) {
    return 'Fractional Sales';
  }
  if (task.toLowerCase().includes('steam') || task.toLowerCase().includes('reddit') || 
      task.toLowerCase().includes('kanban') || task.toLowerCase().includes('api')) {
    return 'MetaForge';
  }
  return 'General';
};

// Infer tags from task description
const inferTags = (task: string): string[] => {
  const tags: string[] = [];
  const taskLower = task.toLowerCase();
  
  if (taskLower.includes('research') || taskLower.includes('intelligence')) tags.push('research');
  if (taskLower.includes('api') || taskLower.includes('setup')) tags.push('development');
  if (taskLower.includes('pitch') || taskLower.includes('package')) tags.push('sales');
  if (taskLower.includes('material') || taskLower.includes('review')) tags.push('analysis');
  if (taskLower.includes('strategic') || taskLower.includes('strategy')) tags.push('strategy');
  if (taskLower.includes('interview') || taskLower.includes('prep')) tags.push('preparation');
  
  return tags.length > 0 ? tags : ['general'];
};

// Infer priority from task description and runtime
const inferPriority = (task: string): 'low' | 'medium' | 'high' => {
  const taskLower = task.toLowerCase();
  
  // High priority indicators
  if (taskLower.includes('critical') || taskLower.includes('urgent') || 
      taskLower.includes('due march') || taskLower.includes('tomorrow') ||
      taskLower.includes('revenue call') || taskLower.includes('interview')) {
    return 'high';
  }
  
  // Medium priority indicators  
  if (taskLower.includes('complete') || taskLower.includes('prepare') || 
      taskLower.includes('setup') || taskLower.includes('deploy')) {
    return 'medium';
  }
  
  return 'low';
};

// Format token count
const formatTokens = (tokens?: number): string => {
  if (!tokens) return '';
  if (tokens > 1000) return `${Math.round(tokens/1000)}k tokens`;
  return `${tokens} tokens`;
};

// Fetch real OpenClaw subagents via server-side API call
const fetchSubagents = async (): Promise<OpenClawSubagent[]> => {
  try {
    // Make internal API call to get subagents data
    const response = await fetch('http://localhost:3000/api/internal/subagents', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch subagents: ${response.status}`);
    }
    
    const data = await response.json();
    return data.subagents || [];
    
  } catch (error) {
    console.error('❌ Failed to fetch real subagents:', error);
    
    // Fallback to empty array if real API fails
    // In production, you might want to return cached data or show an error
    return [];
  }
};

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Fetching real OpenClaw subagents...');
    
    // Fetch active subagents
    const subagents = await fetchSubagents();
    
    // Convert to Kanban tasks
    const tasks = subagents.map(mapSubagentToTask);
    
    console.log(`✅ Found ${tasks.length} active agents`);
    
    return NextResponse.json({ 
      success: true, 
      tasks,
      totalActive: tasks.length,
      lastUpdated: Date.now()
    });
    
  } catch (error) {
    console.error('❌ Failed to fetch real agents:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      tasks: []
    }, { status: 500 });
  }
}
export interface Task {
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
}

export interface Column {
  id: string;
  title: string;
  color: string;
}
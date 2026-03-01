export interface TextNote {
  id: string;
  htmlContent: string;
  plainText: string;
  createdAt: string;
  updatedAt: string;
}

export interface VoiceNote {
  id: string;
  audioDataUrl: string;
  duration: number;
  createdAt: string;
  label?: string;
}

export interface TaskNotes {
  textNotes: TextNote[];
  voiceNotes: VoiceNote[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  project: string;
  tags: string[];
  status: 'ideas' | 'start' | 'inProgress' | 'complete';
  notes?: TaskNotes;
  // Agent fields
  agentSessionId?: string;
  agentStatus?: 'spawning' | 'running' | 'paused' | 'completed' | 'error';
  agentRuntime?: string;
  agentType?: string;
  agentOutput?: string;
  agentError?: string;
  agentStartedAt?: string;
  agentCompletedAt?: string;
}

export interface Column {
  id: string;
  title: string;
  color: string;
}

export const columns: Column[] = [
  { id: 'ideas', title: 'Ideas', color: 'bg-blue-50 border-blue-200' },
  { id: 'start', title: 'Start/Launch', color: 'bg-yellow-50 border-yellow-200' },
  { id: 'inProgress', title: 'In Progress', color: 'bg-purple-50 border-purple-200' },
  { id: 'complete', title: 'Complete', color: 'bg-green-50 border-green-200' },
];

export interface SpawnAgentRequest {
  taskId: string;
  title: string;
  description: string;
  project: string;
  tags: string[];
}

export interface SpawnAgentResponse {
  success: boolean;
  sessionId?: string;
  agentType?: string;
  runtime?: string;
  error?: string;
}

export interface AgentStatusResponse {
  sessions: {
    sessionId: string;
    status: 'running' | 'paused' | 'completed' | 'error';
    progress?: number;
    output?: string;
    error?: string;
  }[];
}

export interface ControlAgentRequest {
  sessionId: string;
  action: 'pause' | 'cancel' | 'resume' | 'retry';
}

export interface ControlAgentResponse {
  success: boolean;
  newStatus?: string;
  error?: string;
}

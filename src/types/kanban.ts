export type AgentRuntime = "acp" | "subagent";
export type AgentType = "codex" | "claude-code" | "research" | "business";
export type AgentStatus = "idle" | "spawning" | "running" | "complete" | "error" | "paused" | "cancelled";

export type TaskCategory = "code" | "research" | "analysis" | "business" | "design" | "general";

export type ColumnId = "backlog" | "start" | "in-progress" | "review" | "complete";

export interface AgentMetadata {
  agentType: AgentType;
  runtime: AgentRuntime;
  agentId?: string;
  sessionId?: string;
  status: AgentStatus;
  startedAt?: string;
  completedAt?: string;
  estimatedMinutes?: number;
  progress?: number;
  error?: string;
  logs?: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  columnId: ColumnId;
  priority: "low" | "medium" | "high" | "urgent";
  createdAt: string;
  updatedAt: string;
  agent?: AgentMetadata;
  tags?: string[];
}

export interface Column {
  id: ColumnId;
  title: string;
  icon: string;
  color: string;
  tasks: Task[];
}

export interface SpawnAgentRequest {
  taskId: string;
  category: TaskCategory;
  title: string;
  description: string;
}

export interface SpawnAgentResponse {
  success: boolean;
  sessionId?: string;
  agentId?: string;
  error?: string;
}

export interface UpdateTaskRequest {
  taskId: string;
  columnId?: ColumnId;
  agentStatus?: AgentStatus;
  progress?: number;
  error?: string;
}

export interface TaskStatusResponse {
  taskId: string;
  columnId: ColumnId;
  agent?: AgentMetadata;
}
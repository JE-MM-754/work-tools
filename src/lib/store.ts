import { Task, Column, ColumnId, AgentStatus } from "@/types/kanban";

// In-memory store (would use a database in production)
let tasks: Task[] = [
  {
    id: "task-1",
    title: "Build Authentication API",
    description: "Implement JWT-based auth with refresh tokens, rate limiting, and OAuth2 support",
    category: "code",
    columnId: "backlog",
    priority: "high",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["api", "security", "backend"],
  },
  {
    id: "task-2",
    title: "Market Analysis Report",
    description: "Research competitor landscape, pricing strategies, and market positioning for Q2",
    category: "research",
    columnId: "backlog",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["research", "strategy"],
  },
  {
    id: "task-3",
    title: "Database Schema Migration",
    description: "Migrate PostgreSQL schema to support multi-tenant architecture with proper indexing",
    category: "code",
    columnId: "start",
    priority: "urgent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["database", "migration"],
  },
  {
    id: "task-4",
    title: "Revenue Projection Model",
    description: "Build financial model for next 12 months with growth scenarios and sensitivity analysis",
    category: "business",
    columnId: "in-progress",
    priority: "high",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["finance", "planning"],
    agent: {
      agentType: "business",
      runtime: "subagent",
      status: "running",
      startedAt: new Date(Date.now() - 300000).toISOString(),
      estimatedMinutes: 8,
      progress: 65,
    },
  },
  {
    id: "task-5",
    title: "User Engagement Analytics",
    description: "Analyze user behavior patterns, cohort retention, and feature adoption metrics",
    category: "analysis",
    columnId: "review",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["analytics", "product"],
    agent: {
      agentType: "research",
      runtime: "subagent",
      status: "complete",
      startedAt: new Date(Date.now() - 600000).toISOString(),
      completedAt: new Date(Date.now() - 60000).toISOString(),
      estimatedMinutes: 12,
      progress: 100,
    },
  },
  {
    id: "task-6",
    title: "CI/CD Pipeline Setup",
    description: "Configure GitHub Actions with automated testing, linting, and deployment to staging",
    category: "code",
    columnId: "complete",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["devops", "automation"],
    agent: {
      agentType: "codex",
      runtime: "acp",
      agentId: "codex",
      status: "complete",
      startedAt: new Date(Date.now() - 900000).toISOString(),
      completedAt: new Date(Date.now() - 120000).toISOString(),
      estimatedMinutes: 15,
      progress: 100,
    },
  },
];

export const COLUMNS: Column[] = [
  { id: "backlog", title: "Backlog", icon: "\uD83D\uDCE5", color: "#6b7280", tasks: [] },
  { id: "start", title: "Start / Launch", icon: "\uD83D\uDE80", color: "#3b82f6", tasks: [] },
  { id: "in-progress", title: "In Progress", icon: "\u2699\uFE0F", color: "#f59e0b", tasks: [] },
  { id: "review", title: "Review", icon: "\uD83D\uDC41\uFE0F", color: "#8b5cf6", tasks: [] },
  { id: "complete", title: "Complete", icon: "\u2705", color: "#10b981", tasks: [] },
];

export function getAllTasks(): Task[] {
  return [...tasks];
}

export function getTask(taskId: string): Task | undefined {
  return tasks.find((t) => t.id === taskId);
}

export function updateTask(taskId: string, updates: Partial<Task>): Task | undefined {
  const index = tasks.findIndex((t) => t.id === taskId);
  if (index === -1) return undefined;
  tasks[index] = { ...tasks[index], ...updates, updatedAt: new Date().toISOString() };
  return tasks[index];
}

export function addTask(task: Task): Task {
  tasks.push(task);
  return task;
}

export function moveTask(taskId: string, newColumnId: ColumnId): Task | undefined {
  return updateTask(taskId, { columnId: newColumnId });
}

export function updateAgentStatus(
  taskId: string,
  status: AgentStatus,
  extra?: { progress?: number; error?: string; sessionId?: string }
): Task | undefined {
  const task = getTask(taskId);
  if (!task || !task.agent) return undefined;

  const agentUpdate: Partial<Task> = {
    agent: {
      ...task.agent,
      status,
      ...(extra?.progress !== undefined && { progress: extra.progress }),
      ...(extra?.error && { error: extra.error }),
      ...(extra?.sessionId && { sessionId: extra.sessionId }),
      ...(status === "complete" && { completedAt: new Date().toISOString(), progress: 100 }),
    },
  };

  return updateTask(taskId, agentUpdate);
}

export function getColumnsWithTasks(): Column[] {
  return COLUMNS.map((col) => ({
    ...col,
    tasks: tasks.filter((t) => t.columnId === col.id),
  }));
}
import { AgentRuntime, AgentType, TaskCategory } from "@/types/kanban";

interface AgentConfig {
  agentType: AgentType;
  runtime: AgentRuntime;
  agentId?: string;
  estimatedMinutes: number;
  label: string;
  description: string;
}

const AGENT_CONFIGS: Record<TaskCategory, AgentConfig> = {
  code: {
    agentType: "codex",
    runtime: "acp",
    agentId: "codex",
    estimatedMinutes: 15,
    label: "Codex Agent",
    description: "Code generation, debugging, and implementation",
  },
  research: {
    agentType: "research",
    runtime: "subagent",
    estimatedMinutes: 10,
    label: "Research Agent",
    description: "Deep research and information synthesis",
  },
  analysis: {
    agentType: "research",
    runtime: "subagent",
    estimatedMinutes: 12,
    label: "Analysis Agent",
    description: "Data analysis and pattern recognition",
  },
  business: {
    agentType: "business",
    runtime: "subagent",
    estimatedMinutes: 8,
    label: "Business Agent",
    description: "Business strategy and planning",
  },
  design: {
    agentType: "claude-code",
    runtime: "subagent",
    estimatedMinutes: 20,
    label: "Design Agent",
    description: "UI/UX design and prototyping",
  },
  general: {
    agentType: "claude-code",
    runtime: "subagent",
    estimatedMinutes: 10,
    label: "General Agent",
    description: "General-purpose task execution",
  },
};

export function getAgentConfig(category: TaskCategory): AgentConfig {
  return AGENT_CONFIGS[category] || AGENT_CONFIGS.general;
}

export function getCategoryColor(category: TaskCategory): string {
  const colors: Record<TaskCategory, string> = {
    code: "#3b82f6",
    research: "#8b5cf6",
    analysis: "#06b6d4",
    business: "#f59e0b",
    design: "#ec4899",
    general: "#6b7280",
  };
  return colors[category] || colors.general;
}

export function getCategoryIcon(category: TaskCategory): string {
  const icons: Record<TaskCategory, string> = {
    code: "\u26A1",
    research: "\uD83D\uDD0D",
    analysis: "\uD83D\uDCCA",
    business: "\uD83D\uDCBC",
    design: "\uD83C\uDFA8",
    general: "\uD83D\uDCCB",
  };
  return icons[category] || icons.general;
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    urgent: "#ef4444",
    high: "#f59e0b",
    medium: "#3b82f6",
    low: "#6b7280",
  };
  return colors[priority] || colors.medium;
}
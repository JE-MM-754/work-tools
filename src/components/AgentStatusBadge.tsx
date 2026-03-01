"use client";

import { AgentMetadata, AgentStatus } from "@/types/kanban";

interface Props {
  agent: AgentMetadata;
  compact?: boolean;
}

const STATUS_CONFIG: Record<AgentStatus, { label: string; color: string; bg: string; animate?: string }> = {
  idle: { label: "Idle", color: "text-gray-400", bg: "bg-gray-800" },
  spawning: { label: "Spawning...", color: "text-blue-400", bg: "bg-blue-950", animate: "animate-pulse" },
  running: { label: "Running", color: "text-amber-400", bg: "bg-amber-950", animate: "animate-pulse-slow" },
  complete: { label: "Complete", color: "text-green-400", bg: "bg-green-950" },
  error: { label: "Error", color: "text-red-400", bg: "bg-red-950" },
  paused: { label: "Paused", color: "text-yellow-400", bg: "bg-yellow-950" },
  cancelled: { label: "Cancelled", color: "text-gray-400", bg: "bg-gray-800" },
};

export default function AgentStatusBadge({ agent, compact = false }: Props) {
  const config = STATUS_CONFIG[agent.status] || STATUS_CONFIG.idle;
  const agentLabel =
    agent.agentType === "codex"
      ? "Codex"
      : agent.agentType === "claude-code"
      ? "Claude"
      : agent.agentType === "research"
      ? "Research"
      : "Business";

  if (compact) {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${config.color} ${config.bg} ${config.animate || ""}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${agent.status === "running" ? "bg-amber-400" : agent.status === "complete" ? "bg-green-400" : agent.status === "error" ? "bg-red-400" : "bg-gray-400"}`} />
        {config.label}
      </span>
    );
  }

  return (
    <div className={`rounded-lg p-2 ${config.bg} border border-white/5 ${config.animate || ""}`}>
      <div className="flex items-center justify-between mb-1">
        <span className={`text-xs font-semibold ${config.color}`}>
          {agentLabel} Agent
        </span>
        <span className={`text-xs ${config.color}`}>{config.label}</span>
      </div>

      {agent.status === "running" && agent.progress !== undefined && (
        <div className="mt-1.5">
          <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
            <span>Progress</span>
            <span>{agent.progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${agent.progress}%` }}
            />
          </div>
          {agent.estimatedMinutes && (
            <p className="text-[10px] text-gray-600 mt-0.5">
              ~{agent.estimatedMinutes}min estimated
            </p>
          )}
        </div>
      )}

      {agent.status === "error" && agent.error && (
        <p className="text-[10px] text-red-400 mt-1 truncate">{agent.error}</p>
      )}
    </div>
  );
}
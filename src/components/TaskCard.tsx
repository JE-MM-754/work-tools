"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "@/types/kanban";
import { getCategoryColor, getCategoryIcon, getPriorityColor } from "@/lib/agent-config";
import AgentStatusBadge from "./AgentStatusBadge";

interface Props {
  task: Task;
  onPause?: (taskId: string) => void;
  onCancel?: (taskId: string) => void;
  onRetry?: (taskId: string) => void;
}

export default function TaskCard({ task, onPause, onCancel, onRetry }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: { type: "task", task },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const categoryColor = getCategoryColor(task.category);
  const categoryIcon = getCategoryIcon(task.category);
  const priorityColor = getPriorityColor(task.priority);
  const isAgentActive = task.agent && (task.agent.status === "running" || task.agent.status === "spawning");

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`group relative rounded-xl p-3 cursor-grab active:cursor-grabbing transition-all duration-200
        ${isDragging ? "shadow-2xl shadow-blue-500/20 scale-105 z-50" : "hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"}
        ${isAgentActive ? "ring-1 ring-blue-500/30" : ""}
        bg-dark-700 border border-white/5 hover:border-white/10`}
    >
      {/* Category accent bar */}
      <div
        className="absolute top-0 left-3 right-3 h-0.5 rounded-b-full"
        style={{ backgroundColor: categoryColor }}
      />

      {/* Header: category + priority */}
      <div className="flex items-center justify-between mb-2 mt-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{categoryIcon}</span>
          <span className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
            {task.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: priorityColor }}
            title={`${task.priority} priority`}
          />
          <span className="text-[10px] text-gray-500 capitalize">{task.priority}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-100 mb-1 line-clamp-2 leading-snug">
        {task.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed">
        {task.description}
      </p>

      {/* Tags */}
      {task.tags && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {task.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 rounded text-[10px] bg-dark-500 text-gray-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Agent Status */}
      {task.agent && <AgentStatusBadge agent={task.agent} />}

      {/* Action buttons for active agents */}
      {isAgentActive && (
        <div className="flex gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {task.agent?.status === "running" && onPause && (
            <button
              onClick={(e) => { e.stopPropagation(); onPause(task.id); }}
              className="flex-1 text-[10px] px-2 py-1 rounded-md bg-yellow-900/30 text-yellow-400 border border-yellow-800/30 hover:bg-yellow-900/50 transition-colors"
            >
              \u23F8 Pause
            </button>
          )}
          {onCancel && (
            <button
              onClick={(e) => { e.stopPropagation(); onCancel(task.id); }}
              className="flex-1 text-[10px] px-2 py-1 rounded-md bg-red-900/30 text-red-400 border border-red-800/30 hover:bg-red-900/50 transition-colors"
            >
              \u2715 Cancel
            </button>
          )}
        </div>
      )}

      {/* Retry button for failed agents */}
      {task.agent?.status === "error" && onRetry && (
        <button
          onClick={(e) => { e.stopPropagation(); onRetry(task.id); }}
          className="w-full mt-2 text-[10px] px-2 py-1 rounded-md bg-blue-900/30 text-blue-400 border border-blue-800/30 hover:bg-blue-900/50 transition-colors"
        >
          \u21BB Retry
        </button>
      )}
    </div>
  );
}
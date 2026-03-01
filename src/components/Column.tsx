"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Column as ColumnType } from "@/types/kanban";
import TaskCard from "./TaskCard";

interface Props {
  column: ColumnType;
  onPauseTask?: (taskId: string) => void;
  onCancelTask?: (taskId: string) => void;
  onRetryTask?: (taskId: string) => void;
}

export default function Column({ column, onPauseTask, onCancelTask, onRetryTask }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
    data: { type: "column", column },
  });

  const taskIds = column.tasks.map((t) => t.id);
  const activeCount = column.tasks.filter(
    (t) => t.agent && (t.agent.status === "running" || t.agent.status === "spawning")
  ).length;

  return (
    <div
      className={`flex flex-col min-w-[280px] max-w-[320px] rounded-2xl transition-all duration-200
        ${isOver ? "ring-2 ring-blue-500/40 bg-dark-700/50" : "bg-dark-800/50"}
        border border-white/5`}
    >
      {/* Column Header */}
      <div className="px-4 py-3 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{column.icon}</span>
            <h2 className="text-sm font-semibold text-gray-200">{column.title}</h2>
          </div>
          <div className="flex items-center gap-1.5">
            {activeCount > 0 && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-950 text-blue-400 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {activeCount} active
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-dark-600 text-gray-400">
              {column.tasks.length}
            </span>
          </div>
        </div>
        {column.id === "start" && (
          <p className="text-[10px] text-gray-600 mt-1">
            Drop tasks here to spawn AI agents
          </p>
        )}
      </div>

      {/* Task List */}
      <div
        ref={setNodeRef}
        className={`flex-1 p-2 space-y-2 min-h-[200px] overflow-y-auto transition-colors duration-200
          ${isOver ? "bg-blue-500/5" : ""}`}
      >
        <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
          {column.tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onPause={onPauseTask}
              onCancel={onCancelTask}
              onRetry={onRetryTask}
            />
          ))}
        </SortableContext>

        {column.tasks.length === 0 && (
          <div className={`flex items-center justify-center h-24 rounded-xl border-2 border-dashed transition-colors
            ${isOver ? "border-blue-500/40 bg-blue-500/5" : "border-white/5"}`}>
            <p className="text-xs text-gray-600">
              {column.id === "start" ? "Drop to launch agent" : "Drop tasks here"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
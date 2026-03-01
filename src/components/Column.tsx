'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import { Task } from '@/types/kanban';

interface ColumnProps {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
  onPauseTask?: (taskId: string) => void;
  onCancelTask?: (taskId: string) => void;
  onRetryTask?: (taskId: string) => void;
  onViewOutput?: (task: Task) => void;
  onNotesClick?: (taskId: string) => void;
}

export default function Column({ id, title, color, tasks, onPauseTask, onCancelTask, onRetryTask, onViewOutput, onNotesClick }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div className={`rounded-xl border-2 ${color} p-3 min-h-[200px] transition-all ${isOver ? 'ring-2 ring-blue-400 scale-[1.01]' : ''}`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-gray-700 text-sm">{title}</h2>
        <span className="text-xs text-gray-400">{tasks.length} tasks</span>
      </div>
      <div ref={setNodeRef} className="space-y-2 min-h-[100px]">
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onPauseTask={onPauseTask}
              onCancelTask={onCancelTask}
              onRetryTask={onRetryTask}
              onViewOutput={onViewOutput}
              onNotesClick={onNotesClick}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

'use client';

import Column from './Column';
import { Task, columns } from '@/types/kanban';

interface KanbanBoardProps {
  tasks: Task[];
  onPauseTask?: (taskId: string) => void;
  onCancelTask?: (taskId: string) => void;
  onRetryTask?: (taskId: string) => void;
  onViewOutput?: (task: Task) => void;
  onNotesClick?: (taskId: string) => void;
}

export default function KanbanBoard({ tasks, onPauseTask, onCancelTask, onRetryTask, onViewOutput, onNotesClick }: KanbanBoardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {columns.map(col => (
        <Column
          key={col.id}
          id={col.id}
          title={col.title}
          color={col.color}
          tasks={tasks.filter(t => t.status === col.id)}
          onPauseTask={onPauseTask}
          onCancelTask={onCancelTask}
          onRetryTask={onRetryTask}
          onViewOutput={onViewOutput}
          onNotesClick={onNotesClick}
        />
      ))}
    </div>
  );
}

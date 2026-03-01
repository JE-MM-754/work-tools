'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Column from './Column';
import { Task } from '@/app/page';

interface KanbanBoardProps {
  tasks: Task[];
  onPauseTask: (taskId: string) => void;
  onCancelTask: (taskId: string) => void;
}

const columns = [
  { id: 'ideas', title: 'Ideas', color: 'bg-blue-50 border-blue-200' },
  { id: 'start', title: 'Start/Launch', color: 'bg-yellow-50 border-yellow-200' },
  { id: 'inProgress', title: 'In Progress', color: 'bg-purple-50 border-purple-200' },
  { id: 'complete', title: 'Complete', color: 'bg-green-50 border-green-200' }
] as const;

export default function KanbanBoard({ tasks, onPauseTask, onCancelTask }: KanbanBoardProps) {
  const getTasksForColumn = (columnId: string) => {
    return tasks.filter(task => task.status === columnId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map(column => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          color={column.color}
          tasks={getTasksForColumn(column.id)}
          onPauseTask={onPauseTask}
          onCancelTask={onCancelTask}
        />
      ))}
    </div>
  );
}
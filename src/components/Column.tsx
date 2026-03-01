'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';
import { Task } from '@/app/page';

interface ColumnProps {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
  onPauseTask: (taskId: string) => void;
  onCancelTask: (taskId: string) => void;
}

export default function Column({ id, title, color, tasks, onPauseTask, onCancelTask }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900 text-lg">{title}</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {tasks.length} tasks
        </span>
      </div>
      
      <div
        ref={setNodeRef}
        className={`
          flex-1 min-h-96 p-4 rounded-lg border-2 border-dashed transition-colors
          ${color}
          ${isOver ? 'border-blue-400 bg-blue-100' : ''}
        `}
      >
        <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-3">
            {tasks.map(task => (
              <TaskCard 
                key={task.id} 
                task={task}
                onPauseTask={onPauseTask}
                onCancelTask={onCancelTask}
                showControls={id === 'inProgress'}
              />
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}
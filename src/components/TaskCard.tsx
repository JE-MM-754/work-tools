'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '@/app/page';

interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
  showControls?: boolean;
  onPauseTask?: (taskId: string) => void;
  onCancelTask?: (taskId: string) => void;
}

const priorityColors = {
  low: 'bg-gray-100 text-gray-700 border-gray-200',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  high: 'bg-red-100 text-red-700 border-red-200'
};

const projectColors = {
  'CinchIT': 'bg-blue-500',
  'MetaForge': 'bg-purple-500',
  'Job Search': 'bg-green-500'
};

export default function TaskCard({ 
  task, 
  isDragging = false, 
  showControls = false,
  onPauseTask,
  onCancelTask 
}: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isCurrentlyDragging = isDragging || isSortableDragging;
  const canDrag = task.status === 'ideas';

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(canDrag ? attributes : {})}
      {...(canDrag ? listeners : {})}
      className={`
        bg-white rounded-lg shadow-sm border p-4 space-y-3
        ${canDrag ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
        ${isCurrentlyDragging ? 'opacity-50 rotate-3 scale-105' : 'hover:shadow-md'}
        ${!canDrag ? 'opacity-75' : ''}
        transition-all duration-200
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="font-medium text-gray-900 text-sm leading-tight">{task.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium border ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm">{task.description}</p>

      {/* Project */}
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${projectColors[task.project as keyof typeof projectColors] || 'bg-gray-400'}`}></div>
        <span className="text-sm font-medium text-gray-700">{task.project}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {task.tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Controls for In Progress tasks */}
      {showControls && (
        <div className="flex space-x-2 pt-2 border-t">
          <button
            onClick={() => onPauseTask?.(task.id)}
            className="flex-1 px-3 py-2 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors"
          >
            ⏸️ Pause
          </button>
          <button
            onClick={() => onCancelTask?.(task.id)}
            className="flex-1 px-3 py-2 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
          >
            ❌ Cancel
          </button>
        </div>
      )}
    </div>
  );
}
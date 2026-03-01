'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '@/types/kanban';
import { useState, useEffect } from 'react';

interface TaskCardProps {
  task: Task;
  onPauseTask?: (taskId: string) => void;
  onCancelTask?: (taskId: string) => void;
  onRetryTask?: (taskId: string) => void;
  onViewOutput?: (task: Task) => void;
  onNotesClick?: (taskId: string) => void;
}

export default function TaskCard({ task, onPauseTask, onCancelTask, onRetryTask, onViewOutput, onNotesClick }: TaskCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });
  const [elapsed, setElapsed] = useState('');

  useEffect(() => {
    if (task.agentStatus !== 'running' || !task.agentStartedAt) return;
    const update = () => {
      const secs = Math.floor((Date.now() - new Date(task.agentStartedAt!).getTime()) / 1000);
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      setElapsed(m > 0 ? `${m}m ${s}s` : `${s}s`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [task.agentStatus, task.agentStartedAt]);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const priorityColors: Record<string, string> = {
    high: 'bg-red-100 text-red-700',
    medium: 'bg-orange-100 text-orange-700',
    low: 'bg-gray-100 text-gray-600',
  };

  const projectColors: Record<string, string> = {
    CinchIT: 'text-blue-600',
    MetaForge: 'text-purple-600',
    'Job Search': 'text-green-600',
  };

  const statusBadge = () => {
    switch (task.agentStatus) {
      case 'spawning':
        return <span className="inline-flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full"><span className="animate-spin inline-block w-3 h-3 border-2 border-yellow-400 border-t-transparent rounded-full"></span>Spawning</span>;
      case 'running':
        return <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"><span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>Running {elapsed && `(${elapsed})`}</span>;
      case 'paused':
        return <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">Paused</span>;
      case 'completed':
        return <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Complete</span>;
      case 'error':
        return <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full">Error</span>;
      default:
        return null;
    }
  };

  const noteCount = (task.notes?.textNotes?.length || 0) + (task.notes?.voiceNotes?.length || 0);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing ${task.agentStatus === 'spawning' ? 'ring-2 ring-yellow-300' : ''}`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-medium text-gray-900 text-sm leading-tight flex-1">{task.title}</h3>
        <span className={`text-xs px-1.5 py-0.5 rounded ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{task.description}</p>
      )}

      <div className="flex items-center gap-1.5 mb-2">
        <span className={`text-xs font-medium ${projectColors[task.project] || 'text-gray-600'}`}>
          {task.project}
        </span>
      </div>

      {task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {task.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{tag}</span>
          ))}
        </div>
      )}

      {/* Notes Badge */}
      <div className="flex items-center gap-2 mb-1" onPointerDown={e => e.stopPropagation()}>
        <button
          onClick={() => onNotesClick?.(task.id)}
          className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md transition-colors ${
            noteCount > 0
              ? 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200'
              : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 border border-gray-200'
          }`}
        >
          <span className="text-[11px]">&#9998;</span>
          {noteCount > 0 ? `${noteCount} note${noteCount !== 1 ? 's' : ''}` : 'Add note'}
        </button>
      </div>

      {/* Agent Status Section */}
      {task.agentStatus && (
        <div className="mt-2 pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            {statusBadge()}
            {task.agentType && <span className="text-xs text-gray-400">{task.agentType}</span>}
          </div>

          {task.agentError && (
            <p className="text-xs text-red-600 mt-1 line-clamp-2">{task.agentError}</p>
          )}

          {/* Control Buttons */}
          <div className="flex items-center gap-1 mt-2" onPointerDown={e => e.stopPropagation()}>
            {task.agentStatus === 'running' && (
              <>
                {onPauseTask && (
                  <button onClick={() => onPauseTask(task.id)} className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-600">
                    Pause
                  </button>
                )}
                {onCancelTask && (
                  <button onClick={() => onCancelTask(task.id)} className="text-xs px-2 py-1 bg-red-50 hover:bg-red-100 rounded text-red-600">
                    Cancel
                  </button>
                )}
              </>
            )}
            {task.agentStatus === 'paused' && onPauseTask && (
              <button onClick={() => onPauseTask(task.id)} className="text-xs px-2 py-1 bg-blue-50 hover:bg-blue-100 rounded text-blue-600">
                Resume
              </button>
            )}
            {task.agentStatus === 'error' && onRetryTask && (
              <button onClick={() => onRetryTask(task.id)} className="text-xs px-2 py-1 bg-yellow-50 hover:bg-yellow-100 rounded text-yellow-700">
                Retry
              </button>
            )}
            {(task.agentStatus === 'completed' || task.agentStatus === 'error') && onViewOutput && (
              <button onClick={() => onViewOutput(task)} className="text-xs px-2 py-1 bg-blue-50 hover:bg-blue-100 rounded text-blue-600">
                View Output
              </button>
            )}
          </div>
        </div>
      )}

      {/* Non-agent task controls for inProgress/start */}
      {!task.agentStatus && task.status === 'inProgress' && (
        <div className="flex items-center gap-1 mt-2 pt-2 border-t border-gray-100" onPointerDown={e => e.stopPropagation()}>
          {onPauseTask && (
            <button onClick={() => onPauseTask(task.id)} className="text-xs px-2 py-1 bg-yellow-50 hover:bg-yellow-100 rounded text-yellow-700 flex items-center gap-1">
              Pause
            </button>
          )}
          {onCancelTask && (
            <button onClick={() => onCancelTask(task.id)} className="text-xs px-2 py-1 bg-red-50 hover:bg-red-100 rounded text-red-600 flex items-center gap-1">
              Cancel
            </button>
          )}
        </div>
      )}
    </div>
  );
}

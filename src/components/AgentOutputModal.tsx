'use client';

import { Task } from '@/types/kanban';

interface AgentOutputModalProps {
  task: Task;
  onClose: () => void;
}

export default function AgentOutputModal({ task, onClose }: AgentOutputModalProps) {
  const elapsed = task.agentStartedAt
    ? Math.floor((Date.now() - new Date(task.agentStartedAt).getTime()) / 1000)
    : 0;

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">{task.title}</h3>
            <p className="text-sm text-gray-500">{task.project}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">&times;</button>
        </div>
        <div className="px-6 py-4 space-y-4 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-gray-500">Agent Type</span><p className="font-medium">{task.agentType || 'N/A'}</p></div>
            <div><span className="text-gray-500">Runtime</span><p className="font-medium">{task.agentRuntime || 'N/A'}</p></div>
            <div><span className="text-gray-500">Status</span><p className="font-medium capitalize">{task.agentStatus || 'N/A'}</p></div>
            <div><span className="text-gray-500">Elapsed</span><p className="font-medium">{elapsed > 0 ? formatTime(elapsed) : 'N/A'}</p></div>
          </div>
          {task.agentSessionId && (
            <div><span className="text-sm text-gray-500">Session ID</span><p className="text-xs font-mono bg-gray-100 rounded px-2 py-1 mt-1 break-all">{task.agentSessionId}</p></div>
          )}
          {task.agentError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <span className="text-sm font-medium text-red-800">Error</span>
              <p className="text-sm text-red-700 mt-1">{task.agentError}</p>
            </div>
          )}
          {task.agentOutput && (
            <div><span className="text-sm text-gray-500">Output</span>
              <div className="mt-1 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm whitespace-pre-wrap font-mono max-h-48 overflow-y-auto">{task.agentOutput}</div>
            </div>
          )}
        </div>
        <div className="px-6 py-3 border-t border-gray-200 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">Close</button>
        </div>
      </div>
    </div>
  );
}

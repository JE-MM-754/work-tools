'use client';

import { useState, useEffect, useCallback } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import KanbanBoard from '@/components/KanbanBoard';
import TaskCard from '@/components/TaskCard';
import AgentOutputModal from '@/components/AgentOutputModal';
import NotesModal from '@/components/NotesModal';
import { ToastProvider, useToast } from '@/components/Toast';
import { Task, TaskNotes } from '@/types/kanban';

const initialTasks: Task[] = [
  // IDEAS - Tasks ready to be launched
  {
    id: '1',
    title: 'MetaForge Revenue Model',
    description: 'Build detailed revenue projection model for MetaForge gaming platform',
    priority: 'high',
    project: 'MetaForge',
    tags: ['revenue', 'financial-model'],
    status: 'ideas',
  },
  {
    id: '2',
    title: 'AI Agent Architecture',
    description: 'Design multi-agent system architecture for CinchIT platform',
    priority: 'high',
    project: 'CinchIT',
    tags: ['architecture', 'design'],
    status: 'ideas',
  },
  {
    id: '3',
    title: 'Target Company Research',
    description: 'Research top 50 target companies for VP Sales roles',
    priority: 'high',
    project: 'Job Search',
    tags: ['research', 'networking'],
    status: 'ideas',
  },
  // START/LAUNCH - Queued for agent spawning
  {
    id: '4',
    title: 'LinkedIn Profile Optimization',
    description: 'Update LinkedIn with recent achievements and AI expertise positioning',
    priority: 'medium',
    project: 'Job Search',
    tags: ['linkedin', 'branding'],
    status: 'start',
  },
  // IN PROGRESS - Active agents working
  {
    id: '5',
    title: 'CinchIT Pitch Package',
    description: 'Create compelling B2B sales presentation for CinchIT managed services',
    priority: 'high',
    project: 'CinchIT',
    tags: ['sales', 'enterprise'],
    status: 'inProgress',
    agentSessionId: 'agent-cinchit-pitch',
    agentStatus: 'running',
    agentType: 'Research Agent',
    agentRuntime: 'subagent',
    agentStartedAt: new Date(Date.now() - 45 * 60000).toISOString(),
  },
  {
    id: '6',
    title: 'Fractional Sales Intelligence',
    description: 'Research fractional VP Sales market rates, positioning strategies, and outreach frameworks',
    priority: 'high',
    project: 'Job Search',
    tags: ['research', 'fractional'],
    status: 'inProgress',
    agentSessionId: 'agent-fractional-intel',
    agentStatus: 'running',
    agentType: 'Research Agent',
    agentRuntime: 'subagent',
    agentStartedAt: new Date(Date.now() - 30 * 60000).toISOString(),
  },
  {
    id: '7',
    title: 'AI Kanban Deployment',
    description: 'Deploy and configure the AI-powered kanban dashboard with live agent integration',
    priority: 'high',
    project: 'CinchIT',
    tags: ['deployment', 'development'],
    status: 'inProgress',
    agentSessionId: 'agent-kanban-deploy',
    agentStatus: 'running',
    agentType: 'Code Agent',
    agentRuntime: 'acp',
    agentStartedAt: new Date(Date.now() - 20 * 60000).toISOString(),
  },
  {
    id: '8',
    title: 'Fractional Business Framework',
    description: 'Build comprehensive fractional sales leadership framework with service tiers and pricing',
    priority: 'high',
    project: 'Job Search',
    tags: ['framework', 'business'],
    status: 'inProgress',
    agentSessionId: 'agent-fractional-framework',
    agentStatus: 'running',
    agentType: 'Research Agent',
    agentRuntime: 'subagent',
    agentStartedAt: new Date(Date.now() - 55 * 60000).toISOString(),
  },
  // COMPLETE - Finished work
  {
    id: '9',
    title: 'TrueFoundry Strategic Analysis',
    description: 'Complete strategic analysis of TrueFoundry partnership opportunities and market positioning',
    priority: 'high',
    project: 'Job Search',
    tags: ['strategy', 'analysis'],
    status: 'complete',
    agentSessionId: 'agent-truefoundry',
    agentStatus: 'completed',
    agentType: 'Research Agent',
    agentRuntime: 'subagent',
    agentStartedAt: new Date(Date.now() - 120 * 60000).toISOString(),
    agentCompletedAt: new Date(Date.now() - 60 * 60000).toISOString(),
    agentOutput: 'Strategic analysis complete. TrueFoundry represents strong partnership opportunity in MLOps space. Key findings: $50M+ TAM, growing 40% YoY, 3 decision-maker contacts identified.',
  },
  {
    id: '10',
    title: 'Interview Preparation',
    description: 'Prepare MEDDPICC case studies and success stories for upcoming interviews',
    priority: 'high',
    project: 'Job Search',
    tags: ['interviews', 'preparation'],
    status: 'complete',
    agentStatus: 'completed',
    agentType: 'Research Agent',
    agentOutput: 'MEDDPICC framework documentation complete with 4 case studies prepared.',
  },
  {
    id: '11',
    title: 'Salary Negotiation Research',
    description: 'Research market rates for $400k+ OTE roles in AI/SaaS sales leadership',
    priority: 'low',
    project: 'Job Search',
    tags: ['negotiation', 'research'],
    status: 'complete',
    agentStatus: 'completed',
    agentType: 'Research Agent',
    agentOutput: 'Market analysis: VP Sales AI/SaaS median OTE $380-450k. Top quartile $500k+.',
  },
];

function KanbanApp() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [outputModalTask, setOutputModalTask] = useState<Task | null>(null);
  const [notesModalTask, setNotesModalTask] = useState<Task | null>(null);
  const { addToast } = useToast();

  // Poll active agents every 30 seconds
  useEffect(() => {
    const poll = async () => {
      const activeTasks = tasks.filter(t => t.agentStatus === 'running' && t.agentSessionId);
      if (activeTasks.length === 0) return;

      const sessionIds = activeTasks.map(t => t.agentSessionId).join(',');
      try {
        const resp = await fetch(`/api/agent-status?sessionIds=${sessionIds}`);
        if (!resp.ok) return;
        const data = await resp.json();

        if (data.sessions && data.sessions.length > 0) {
          setTasks(prev => prev.map(task => {
            const session = data.sessions.find((s: { sessionId: string }) => s.sessionId === task.agentSessionId);
            if (!session) return task;

            if (session.status === 'completed' && task.agentStatus !== 'completed') {
              addToast(`Agent completed: "${task.title}"`, 'success');
              return {
                ...task,
                status: 'complete' as const,
                agentStatus: 'completed' as const,
                agentOutput: session.output || task.agentOutput,
                agentCompletedAt: new Date().toISOString(),
              };
            }
            if (session.status === 'error' && task.agentStatus !== 'error') {
              addToast(`Agent error: "${task.title}"`, 'error');
              return { ...task, agentStatus: 'error' as const, agentError: session.error };
            }
            return task;
          }));
        }
      } catch {
        // Silent fail - offline mode
      }
    };

    poll();
    const interval = setInterval(poll, 30000);
    return () => clearInterval(interval);
  }, [tasks, addToast]);

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find(t => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = useCallback(async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) { setActiveTask(null); return; }

    const taskId = active.id as string;
    const overId = over.id as string;
    const columnIds = ['ideas', 'start', 'inProgress', 'complete'];

    let targetStatus: Task['status'];
    if (columnIds.includes(overId)) {
      targetStatus = overId as Task['status'];
    } else {
      const overTask = tasks.find(t => t.id === overId);
      if (!overTask) { setActiveTask(null); return; }
      targetStatus = overTask.status;
    }

    const task = tasks.find(t => t.id === taskId);
    if (!task) { setActiveTask(null); return; }

    // Allow Ideas -> Start/Launch (triggers agent spawn)
    if (task.status === 'ideas' && targetStatus === 'start') {
      setTasks(prev => prev.map(t =>
        t.id === taskId ? { ...t, status: 'start' as const, agentStatus: 'spawning' as const } : t
      ));
      addToast(`Spawning agent for "${task.title}"...`, 'info');

      try {
        const resp = await fetch('/api/spawn-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            taskId: task.id,
            title: task.title,
            description: task.description,
            project: task.project,
            tags: task.tags,
          }),
        });
        const data = await resp.json();

        if (data.success) {
          setTasks(prev => prev.map(t =>
            t.id === taskId ? {
              ...t,
              status: 'inProgress' as const,
              agentSessionId: data.sessionId,
              agentStatus: 'running' as const,
              agentType: data.agentType,
              agentRuntime: data.runtime,
              agentStartedAt: new Date().toISOString(),
            } : t
          ));
          addToast(`Agent running for "${task.title}"`, 'success');
        } else {
          setTasks(prev => prev.map(t =>
            t.id === taskId ? {
              ...t,
              status: 'start' as const,
              agentStatus: 'error' as const,
              agentError: data.error || 'Failed to spawn agent',
            } : t
          ));
          addToast(`Spawn failed: ${data.error}`, 'error');
        }
      } catch (err) {
        setTasks(prev => prev.map(t =>
          t.id === taskId ? {
            ...t,
            status: 'start' as const,
            agentStatus: 'error' as const,
            agentError: err instanceof Error ? err.message : 'Network error',
          } : t
        ));
        addToast('Agent spawn failed - network error', 'error');
      }
    }

    setActiveTask(null);
  }, [tasks, addToast]);

  const handlePauseTask = useCallback(async (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    if (task.agentStatus === 'paused') {
      // Resume
      try {
        await fetch('/api/control-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: task.agentSessionId, action: 'resume' }),
        });
        setTasks(prev => prev.map(t =>
          t.id === taskId ? { ...t, agentStatus: 'running' as const } : t
        ));
        addToast(`Resumed "${task.title}"`, 'info');
      } catch {
        addToast('Failed to resume agent', 'error');
      }
    } else if (task.agentStatus === 'running') {
      // Pause
      try {
        await fetch('/api/control-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: task.agentSessionId, action: 'pause' }),
        });
        setTasks(prev => prev.map(t =>
          t.id === taskId ? { ...t, agentStatus: 'paused' as const } : t
        ));
        addToast(`Paused "${task.title}"`, 'info');
      } catch {
        addToast('Failed to pause agent', 'error');
      }
    } else {
      // Legacy behavior: move back to start
      setTasks(prev => prev.map(t =>
        t.id === taskId ? { ...t, status: 'start' as const } : t
      ));
    }
  }, [tasks, addToast]);

  const handleCancelTask = useCallback(async (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    if (task.agentSessionId) {
      try {
        await fetch('/api/control-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: task.agentSessionId, action: 'cancel' }),
        });
      } catch {
        // Still cancel locally
      }
    }

    setTasks(prev => prev.map(t =>
      t.id === taskId ? {
        ...t,
        status: 'ideas' as const,
        agentSessionId: undefined,
        agentStatus: undefined,
        agentType: undefined,
        agentRuntime: undefined,
        agentStartedAt: undefined,
        agentError: undefined,
      } : t
    ));
    addToast(`Cancelled "${task?.title}"`, 'warning');
  }, [tasks, addToast]);

  const handleRetryTask = useCallback(async (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    // Reset and re-spawn
    setTasks(prev => prev.map(t =>
      t.id === taskId ? {
        ...t,
        status: 'start' as const,
        agentStatus: 'spawning' as const,
        agentError: undefined,
        agentSessionId: undefined,
      } : t
    ));
    addToast(`Retrying "${task.title}"...`, 'info');

    try {
      const resp = await fetch('/api/spawn-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskId: task.id,
          title: task.title,
          description: task.description,
          project: task.project,
          tags: task.tags,
        }),
      });
      const data = await resp.json();

      if (data.success) {
        setTasks(prev => prev.map(t =>
          t.id === taskId ? {
            ...t,
            status: 'inProgress' as const,
            agentSessionId: data.sessionId,
            agentStatus: 'running' as const,
            agentType: data.agentType,
            agentRuntime: data.runtime,
            agentStartedAt: new Date().toISOString(),
          } : t
        ));
        addToast(`Agent retried for "${task.title}"`, 'success');
      } else {
        setTasks(prev => prev.map(t =>
          t.id === taskId ? { ...t, agentStatus: 'error' as const, agentError: data.error } : t
        ));
        addToast(`Retry failed: ${data.error}`, 'error');
      }
    } catch {
      setTasks(prev => prev.map(t =>
        t.id === taskId ? { ...t, agentStatus: 'error' as const, agentError: 'Network error on retry' } : t
      ));
    }
  }, [tasks, addToast]);

  const handleNotesClick = useCallback((taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) setNotesModalTask(task);
  }, [tasks]);

  const handleUpdateNotes = useCallback((taskId: string, notes: TaskNotes) => {
    setTasks(prev => prev.map(t =>
      t.id === taskId ? { ...t, notes } : t
    ));
    // Keep modal task in sync
    setNotesModalTask(prev => prev && prev.id === taskId ? { ...prev, notes } : prev);
  }, []);

  const activeAgentCount = tasks.filter(t => t.agentStatus === 'running').length;
  const completedAgentCount = tasks.filter(t => t.agentStatus === 'completed').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Work Tools</h1>
            <p className="text-xs text-gray-500">AI Agent Orchestration Dashboard</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            {activeAgentCount > 0 && (
              <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                {activeAgentCount} agent{activeAgentCount !== 1 ? 's' : ''} running
              </span>
            )}
            {completedAgentCount > 0 && (
              <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                {completedAgentCount} completed
              </span>
            )}
          </div>
        </div>

        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <KanbanBoard
            tasks={tasks}
            onPauseTask={handlePauseTask}
            onCancelTask={handleCancelTask}
            onRetryTask={handleRetryTask}
            onViewOutput={setOutputModalTask}
            onNotesClick={handleNotesClick}
          />
          <DragOverlay>
            {activeTask && <TaskCard task={activeTask} />}
          </DragOverlay>
        </DndContext>
      </div>

      {outputModalTask && (
        <AgentOutputModal task={outputModalTask} onClose={() => setOutputModalTask(null)} />
      )}

      {notesModalTask && (
        <NotesModal
          task={notesModalTask}
          onClose={() => setNotesModalTask(null)}
          onUpdateNotes={handleUpdateNotes}
        />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <ToastProvider>
      <KanbanApp />
    </ToastProvider>
  );
}

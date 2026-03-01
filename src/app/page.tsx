'use client';

import { useState, useEffect } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import KanbanBoard from '@/components/KanbanBoard';
import TaskCard from '@/components/TaskCard';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  project: string;
  tags: string[];
  status: 'ideas' | 'start' | 'inProgress' | 'complete';
  agentSessionId?: string;
  agentStatus?: 'running' | 'completed' | 'error' | 'paused';
  progress?: number;
  agentMessage?: string;
  lastUpdated?: number;
  runtime?: string;
  totalTokens?: number;
}

// Template tasks for the Ideas column
const templateTasks: Task[] = [
  {
    id: 'template-1',
    title: 'Build MVP Feature Set',
    description: 'Define and prioritize core features for product MVP',
    priority: 'high',
    project: 'CinchIT',
    tags: ['strategy', 'product'],
    status: 'ideas'
  },
  {
    id: 'template-2', 
    title: 'Market Research & Analysis',
    description: 'Comprehensive market analysis for target segment',
    priority: 'medium',
    project: 'MetaForge',
    tags: ['research', 'market'],
    status: 'ideas'
  },
  {
    id: 'template-3',
    title: 'Sales Pipeline Optimization',
    description: 'Analyze and optimize current sales funnel performance',
    priority: 'medium',
    project: 'Fractional Sales',
    tags: ['sales', 'optimization'],
    status: 'ideas'
  }
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(templateTasks);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // Fetch real agents on mount and set up polling
  useEffect(() => {
    const fetchRealAgents = async () => {
      try {
        const response = await fetch('/api/real-agents');
        const data = await response.json();
        
        if (data.success) {
          // Merge real agents with template tasks
          const realAgents = data.tasks || [];
          const allTasks = [...templateTasks, ...realAgents];
          setTasks(allTasks);
          setError(null);
        } else {
          setError(data.error || 'Failed to load agents');
        }
      } catch (err) {
        console.error('Error fetching real agents:', err);
        setError('Failed to connect to agent API');
      } finally {
        setLoading(false);
      }
    };

    // Initial load
    fetchRealAgents();

    // Poll for updates every 10 seconds
    const interval = setInterval(fetchRealAgents, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find(t => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id as string;
    const overId = over.id as string;

    // Determine target column - over.id could be a column id or a task id
    const columnIds = ['ideas', 'start', 'inProgress', 'complete'];
    let targetStatus: Task['status'];

    if (columnIds.includes(overId)) {
      targetStatus = overId as Task['status'];
    } else {
      // Dropped on a task card - find which column that task belongs to
      const overTask = tasks.find(t => t.id === overId);
      if (!overTask) {
        setActiveTask(null);
        return;
      }
      targetStatus = overTask.status;
    }

    // Only allow drag from Ideas to Start/Launch
    const task = tasks.find(t => t.id === taskId);
    if (task && task.status === 'ideas' && targetStatus === 'start') {
      setTasks(prev => prev.map(t =>
        t.id === taskId ? { ...t, status: targetStatus } : t
      ));

      try {
        // Spawn real agent
        console.log('🚀 Spawning real agent for task:', task.title);
        
        const spawnResponse = await fetch('/api/spawn-agent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            taskId: task.id,
            title: task.title,
            description: task.description,
            project: task.project,
            tags: task.tags,
            priority: task.priority
          })
        });

        const spawnResult = await spawnResponse.json();
        
        if (spawnResult.success) {
          console.log('✅ Agent spawned successfully:', spawnResult.sessionId);
          
          // Update task with agent info and move to "inProgress"
          setTasks(prev => prev.map(t => 
            t.id === taskId ? { 
              ...t, 
              status: 'inProgress',
              agentSessionId: spawnResult.sessionId,
              agentStatus: 'running',
              progress: 5,
              agentMessage: `${spawnResult.agentType} agent started`,
              lastUpdated: Date.now()
            } : t
          ));
        } else {
          console.error('❌ Agent spawn failed:', spawnResult.error);
          
          // Revert task to ideas on failure
          setTasks(prev => prev.map(t => 
            t.id === taskId ? { ...t, status: 'ideas' } : t
          ));
          
          setError(`Failed to spawn agent: ${spawnResult.error}`);
        }
      } catch (err) {
        console.error('❌ Error spawning agent:', err);
        
        // Revert task to ideas on error
        setTasks(prev => prev.map(t => 
          t.id === taskId ? { ...t, status: 'ideas' } : t
        ));
        
        setError('Failed to connect to agent spawning service');
      }
    }

    setActiveTask(null);
  };

  const handlePauseTask = (taskId: string) => {
    setTasks(prev => prev.map(t => 
      t.id === taskId ? { ...t, status: 'start' } : t
    ));
  };

  const handleCancelTask = (taskId: string) => {
    setTasks(prev => prev.map(t => 
      t.id === taskId ? { ...t, status: 'ideas' } : t
    ));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading real agents...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Work Tools 
              <span className="text-sm font-normal text-gray-600 ml-2">
                • Live Agent Dashboard
              </span>
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">
                  {tasks.filter(t => t.agentStatus === 'running').length} agents running
                </span>
              </div>
              {error && (
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <KanbanBoard 
            tasks={tasks} 
            onPauseTask={handlePauseTask}
            onCancelTask={handleCancelTask}
          />
          <DragOverlay>
            {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
          </DragOverlay>
        </DndContext>
      </main>
    </div>
  );
}
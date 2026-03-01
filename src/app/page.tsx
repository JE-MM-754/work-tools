'use client';

import { useState } from 'react';
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
}

const initialTasks: Task[] = [
  // Ideas
  {
    id: '1',
    title: 'MVP Product Definition',
    description: 'Define core features for CinchIT MVP',
    priority: 'high',
    project: 'CinchIT',
    tags: ['strategy', 'product'],
    status: 'ideas'
  },
  {
    id: '2',
    title: 'AI Agent Architecture',
    description: 'Design multi-agent system architecture',
    priority: 'high',
    project: 'MetaForge',
    tags: ['ai', 'architecture'],
    status: 'ideas'
  },
  {
    id: '3',
    title: 'Target Company Research',
    description: 'Research top 50 target companies for VP Sales roles',
    priority: 'high',
    project: 'Job Search',
    tags: ['research', 'networking'],
    status: 'ideas'
  },
  // Start/Launch
  {
    id: '4',
    title: 'User Research & Validation',
    description: 'Conduct user interviews for CinchIT pain points',
    priority: 'high',
    project: 'CinchIT',
    tags: ['research', 'validation'],
    status: 'start'
  },
  {
    id: '5',
    title: 'LLM Integration Pipeline',
    description: 'Build pipeline for LLM model integration',
    priority: 'high',
    project: 'MetaForge',
    tags: ['ai', 'development'],
    status: 'start'
  },
  {
    id: '6',
    title: 'LinkedIn Profile Optimization',
    description: 'Update LinkedIn with recent achievements',
    priority: 'medium',
    project: 'Job Search',
    tags: ['linkedin', 'branding'],
    status: 'start'
  },
  {
    id: '7',
    title: 'Interview Preparation',
    description: 'Prepare MEDDPICC case studies and success stories',
    priority: 'high',
    project: 'Job Search',
    tags: ['interviews', 'preparation'],
    status: 'start'
  },
  // In Progress
  {
    id: '8',
    title: 'Landing Page Development',
    description: 'Build marketing landing page with waitlist',
    priority: 'medium',
    project: 'CinchIT',
    tags: ['development', 'marketing'],
    status: 'inProgress'
  },
  {
    id: '9',
    title: 'Enterprise Sales Deck',
    description: 'Create compelling B2B sales presentation',
    priority: 'medium',
    project: 'MetaForge',
    tags: ['sales', 'enterprise'],
    status: 'inProgress'
  },
  // Complete
  {
    id: '10',
    title: 'Beta Testing Program',
    description: 'Launch closed beta with initial users',
    priority: 'medium',
    project: 'CinchIT',
    tags: ['testing', 'beta'],
    status: 'complete'
  },
  {
    id: '11',
    title: 'Demo Environment Setup',
    description: 'Build sandbox demo for prospects',
    priority: 'low',
    project: 'MetaForge',
    tags: ['demo', 'sales'],
    status: 'complete'
  },
  {
    id: '12',
    title: 'Salary Negotiation Research',
    description: 'Research market rates for $400k+ OTE roles',
    priority: 'low',
    project: 'Job Search',
    tags: ['negotiation', 'research'],
    status: 'complete'
  },
  {
    id: '13',
    title: 'Follow-up Email Templates',
    description: 'Create templates for post-interview follow-ups',
    priority: 'low',
    project: 'Job Search',
    tags: ['templates', 'communication'],
    status: 'complete'
  }
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find(t => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];
    
    // Only allow drag from Ideas to Start/Launch
    const task = tasks.find(t => t.id === taskId);
    if (task && task.status === 'ideas' && newStatus === 'start') {
      setTasks(prev => prev.map(t => 
        t.id === taskId ? { ...t, status: newStatus } : t
      ));
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Work Tools</h1>
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
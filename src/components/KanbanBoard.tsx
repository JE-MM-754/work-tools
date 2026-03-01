"use client";

import { useState, useCallback, useEffect } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Task, Column as ColumnType, ColumnId, TaskCategory } from "@/types/kanban";
import { getAgentConfig } from "@/lib/agent-config";
import Column from "./Column";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";

const INITIAL_COLUMNS: ColumnType[] = [
  { id: "backlog", title: "Backlog", icon: "\uD83D\uDCE5", color: "#6b7280", tasks: [] },
  { id: "start", title: "Start / Launch", icon: "\uD83D\uDE80", color: "#3b82f6", tasks: [] },
  { id: "in-progress", title: "In Progress", icon: "\u2699\uFE0F", color: "#f59e0b", tasks: [] },
  { id: "review", title: "Review", icon: "\uD83D\uDC41\uFE0F", color: "#8b5cf6", tasks: [] },
  { id: "complete", title: "Complete", icon: "\u2705", color: "#10b981", tasks: [] },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Build Authentication API",
    description: "Implement JWT-based auth with refresh tokens, rate limiting, and OAuth2 support",
    category: "code",
    columnId: "backlog",
    priority: "high",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["api", "security", "backend"],
  },
  {
    id: "task-2",
    title: "Market Analysis Report",
    description: "Research competitor landscape, pricing strategies, and market positioning for Q2",
    category: "research",
    columnId: "backlog",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["research", "strategy"],
  },
  {
    id: "task-3",
    title: "Database Schema Migration",
    description: "Migrate PostgreSQL schema to support multi-tenant architecture with proper indexing",
    category: "code",
    columnId: "backlog",
    priority: "urgent",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["database", "migration"],
  },
  {
    id: "task-4",
    title: "Revenue Projection Model",
    description: "Build financial model for next 12 months with growth scenarios and sensitivity analysis",
    category: "business",
    columnId: "in-progress",
    priority: "high",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["finance", "planning"],
    agent: {
      agentType: "business",
      runtime: "subagent",
      status: "running",
      startedAt: new Date(Date.now() - 300000).toISOString(),
      estimatedMinutes: 8,
      progress: 65,
    },
  },
  {
    id: "task-5",
    title: "User Engagement Analytics",
    description: "Analyze user behavior patterns, cohort retention, and feature adoption metrics",
    category: "analysis",
    columnId: "review",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["analytics", "product"],
    agent: {
      agentType: "research",
      runtime: "subagent",
      status: "complete",
      startedAt: new Date(Date.now() - 600000).toISOString(),
      completedAt: new Date(Date.now() - 60000).toISOString(),
      estimatedMinutes: 12,
      progress: 100,
    },
  },
  {
    id: "task-6",
    title: "CI/CD Pipeline Setup",
    description: "Configure GitHub Actions with automated testing, linting, and deployment to staging",
    category: "code",
    columnId: "complete",
    priority: "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ["devops", "automation"],
    agent: {
      agentType: "codex",
      runtime: "acp",
      agentId: "codex",
      status: "complete",
      startedAt: new Date(Date.now() - 900000).toISOString(),
      completedAt: new Date(Date.now() - 120000).toISOString(),
      estimatedMinutes: 15,
      progress: 100,
    },
  },
];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [spawnNotification, setSpawnNotification] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const columns: ColumnType[] = INITIAL_COLUMNS.map((col) => ({
    ...col,
    tasks: tasks.filter((t) => t.columnId === col.id),
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.agent?.status === "running" && task.agent.progress !== undefined) {
            const newProgress = Math.min(task.agent.progress + Math.floor(Math.random() * 5) + 1, 100);
            if (newProgress >= 100) {
              return {
                ...task,
                columnId: "review" as ColumnId,
                updatedAt: new Date().toISOString(),
                agent: {
                  ...task.agent,
                  status: "complete",
                  progress: 100,
                  completedAt: new Date().toISOString(),
                },
              };
            }
            return {
              ...task,
              agent: { ...task.agent, progress: newProgress },
            };
          }
          return task;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (spawnNotification) {
      const timer = setTimeout(() => setSpawnNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [spawnNotification]);

  const spawnAgent = useCallback(async (task: Task) => {
    const config = getAgentConfig(task.category);
    const sessionId = `sim-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? {
              ...t,
              columnId: "in-progress" as ColumnId,
              updatedAt: new Date().toISOString(),
              agent: {
                agentType: config.agentType,
                runtime: config.runtime,
                agentId: config.agentId,
                sessionId,
                status: "spawning",
                startedAt: new Date().toISOString(),
                estimatedMinutes: config.estimatedMinutes,
                progress: 0,
              },
            }
          : t
      )
    );

    setSpawnNotification(`\uD83E\uDD16 Spawning ${config.label} for "${task.title}"...`);

    setTimeout(() => {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id && t.agent?.status === "spawning"
            ? {
                ...t,
                agent: { ...t.agent!, status: "running", progress: 5 },
              }
            : t
        )
      );
      setSpawnNotification(`\u2705 ${config.label} is now running for "${task.title}"`);
    }, 2000);

    try {
      await fetch("/api/spawn-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId: task.id,
          category: task.category,
          title: task.title,
          description: task.description,
        }),
      });
    } catch {
      // Standalone mode
    }
  }, []);

  const handlePauseTask = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId && t.agent
          ? { ...t, agent: { ...t.agent, status: "paused" as const } }
          : t
      )
    );
  }, []);

  const handleCancelTask = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId && t.agent
          ? {
              ...t,
              columnId: "backlog" as ColumnId,
              agent: { ...t.agent, status: "cancelled" as const, progress: 0 },
            }
          : t
      )
    );
  }, []);

  const handleRetryTask = useCallback((taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      spawnAgent({ ...task, agent: undefined });
    }
  }, [tasks, spawnAgent]);

  const handleAddTask = useCallback(
    (newTask: { title: string; description: string; category: TaskCategory; priority: "low" | "medium" | "high" | "urgent"; tags: string[] }) => {
      const task: Task = {
        id: `task-${Date.now()}`,
        title: newTask.title,
        description: newTask.description,
        category: newTask.category,
        columnId: "backlog",
        priority: newTask.priority,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: newTask.tags,
      };
      setTasks((prev) => [...prev, task]);
    },
    []
  );

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    if (task) setActiveTask(task);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeTaskId = active.id as string;
    const overId = over.id as string;

    let targetColumnId: ColumnId | null = null;

    if (INITIAL_COLUMNS.some((c) => c.id === overId)) {
      targetColumnId = overId as ColumnId;
    } else {
      const overTask = tasks.find((t) => t.id === overId);
      if (overTask) {
        targetColumnId = overTask.columnId;
      }
    }

    if (!targetColumnId) return;

    const activeTaskData = tasks.find((t) => t.id === activeTaskId);
    if (!activeTaskData || activeTaskData.columnId === targetColumnId) return;

    setTasks((prev) =>
      prev.map((t) =>
        t.id === activeTaskId ? { ...t, columnId: targetColumnId! } : t
      )
    );
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const task = tasks.find((t) => t.id === activeId);
    if (!task) return;

    if (task.columnId === "start" && !task.agent) {
      spawnAgent(task);
    }

    if (activeId !== overId) {
      const overTask = tasks.find((t) => t.id === overId);
      if (overTask && task.columnId === overTask.columnId) {
        setTasks((prev) => {
          const columnTasks = prev.filter((t) => t.columnId === task.columnId);
          const otherTasks = prev.filter((t) => t.columnId !== task.columnId);
          const oldIndex = columnTasks.findIndex((t) => t.id === activeId);
          const newIndex = columnTasks.findIndex((t) => t.id === overId);
          return [...otherTasks, ...arrayMove(columnTasks, oldIndex, newIndex)];
        });
      }
    }
  };

  const totalTasks = tasks.length;
  const activeAgents = tasks.filter((t) => t.agent?.status === "running" || t.agent?.status === "spawning").length;
  const completedToday = tasks.filter((t) => t.agent?.status === "complete").length;

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-white/5 bg-dark-900/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-100">AI Kanban Dashboard</h1>
                <p className="text-[10px] text-gray-500">Powered by OpenClaw Agent System</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-dark-700 border border-white/5">
                  <span className="text-[10px] text-gray-500">Tasks</span>
                  <span className="ml-1.5 text-sm font-semibold text-gray-200">{totalTasks}</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-dark-700 border border-white/5">
                  <span className="text-[10px] text-gray-500">Active Agents</span>
                  <span className="ml-1.5 text-sm font-semibold text-blue-400">{activeAgents}</span>
                  {activeAgents > 0 && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-blue-400 inline-block animate-pulse" />}
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-dark-700 border border-white/5">
                  <span className="text-[10px] text-gray-500">Completed</span>
                  <span className="ml-1.5 text-sm font-semibold text-green-400">{completedToday}</span>
                </div>
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
              >
                <span>+</span>
                <span>New Task</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spawn Notification */}
      {spawnNotification && (
        <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-right">
          <div className="px-4 py-3 rounded-xl bg-dark-700 border border-blue-500/30 shadow-xl shadow-blue-500/10 max-w-sm">
            <p className="text-sm text-gray-200">{spawnNotification}</p>
          </div>
        </div>
      )}

      {/* Board */}
      <main className="max-w-[1600px] mx-auto px-6 py-6">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-4 overflow-x-auto pb-4">
            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                onPauseTask={handlePauseTask}
                onCancelTask={handleCancelTask}
                onRetryTask={handleRetryTask}
              />
            ))}
          </div>

          <DragOverlay>
            {activeTask ? (
              <div className="rotate-3 scale-105">
                <TaskCard task={activeTask} />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </main>

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddTask}
      />
    </div>
  );
}
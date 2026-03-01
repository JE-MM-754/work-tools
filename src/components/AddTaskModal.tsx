"use client";

import { useState } from "react";
import { TaskCategory } from "@/types/kanban";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (task: { title: string; description: string; category: TaskCategory; priority: "low" | "medium" | "high" | "urgent"; tags: string[] }) => void;
}

const CATEGORIES: { value: TaskCategory; label: string; icon: string }[] = [
  { value: "code", label: "Code", icon: "\u26A1" },
  { value: "research", label: "Research", icon: "\uD83D\uDD0D" },
  { value: "analysis", label: "Analysis", icon: "\uD83D\uDCCA" },
  { value: "business", label: "Business", icon: "\uD83D\uDCBC" },
  { value: "design", label: "Design", icon: "\uD83C\uDFA8" },
  { value: "general", label: "General", icon: "\uD83D\uDCCB" },
];

export default function AddTaskModal({ isOpen, onClose, onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<TaskCategory>("general");
  const [priority, setPriority] = useState<"low" | "medium" | "high" | "urgent">("medium");
  const [tagInput, setTagInput] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const tags = tagInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    onAdd({ title, description, category, priority, tags });
    setTitle("");
    setDescription("");
    setCategory("general");
    setPriority("medium");
    setTagInput("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-dark-800 border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold text-gray-100 mb-4">Create New Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-dark-700 border border-white/10 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="Task title..."
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-dark-700 border border-white/10 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
              placeholder="What needs to be done..."
              rows={3}
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Category</label>
            <div className="grid grid-cols-3 gap-1.5">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setCategory(cat.value)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all
                    ${category === cat.value
                      ? "bg-blue-600/20 border-blue-500/50 text-blue-300 border"
                      : "bg-dark-600 border border-white/5 text-gray-400 hover:bg-dark-500"}`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Priority</label>
            <div className="flex gap-1.5">
              {(["low", "medium", "high", "urgent"] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`flex-1 px-2.5 py-1.5 rounded-lg text-xs capitalize transition-all
                    ${priority === p
                      ? "bg-blue-600/20 border-blue-500/50 text-blue-300 border"
                      : "bg-dark-600 border border-white/5 text-gray-400 hover:bg-dark-500"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Tags (comma-separated)</label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="w-full px-3 py-2 bg-dark-700 border border-white/10 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              placeholder="api, backend, v2..."
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-lg text-sm bg-dark-600 text-gray-400 border border-white/5 hover:bg-dark-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim()}
              className="flex-1 px-4 py-2 rounded-lg text-sm bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
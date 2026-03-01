'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface ToastItem {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

interface ToastContextType {
  addToast: (message: string, type?: ToastItem['type']) => void;
}

const ToastContext = createContext<ToastContextType>({ addToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((message: string, type: ToastItem['type'] = 'info') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setToasts(prev => [...prev.slice(-2), { id, type, message }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map(toast => (
          <ToastNotification key={toast.id} toast={toast} onDismiss={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastNotification({ toast, onDismiss }: { toast: ToastItem; onDismiss: (id: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), 5000);
    return () => clearTimeout(timer);
  }, [toast.id, onDismiss]);

  const colors: Record<string, string> = {
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    info: 'bg-blue-600 text-white',
    warning: 'bg-yellow-500 text-black',
  };

  const icons: Record<string, string> = { success: '\u2705', error: '\u274C', info: '\uD83E\uDD16', warning: '\u26A0\uFE0F' };

  return (
    <div className={`${colors[toast.type]} px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in text-sm`}>
      <span>{icons[toast.type]}</span>
      <span className="flex-1">{toast.message}</span>
      <button onClick={() => onDismiss(toast.id)} className="ml-2 opacity-70 hover:opacity-100">&times;</button>
    </div>
  );
}

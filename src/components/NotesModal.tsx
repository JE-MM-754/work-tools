'use client';

import { useState, useEffect, useCallback } from 'react';
import { Task, TaskNotes, TextNote, VoiceNote } from '@/types/kanban';
import RichTextEditor from './RichTextEditor';
import VoiceRecorder from './VoiceRecorder';

interface NotesModalProps {
  task: Task;
  onClose: () => void;
  onUpdateNotes: (taskId: string, notes: TaskNotes) => void;
}

export default function NotesModal({ task, onClose, onUpdateNotes }: NotesModalProps) {
  const [activeTab, setActiveTab] = useState<'text' | 'voice'>('text');
  const [notes, setNotes] = useState<TaskNotes>(
    task.notes || { textNotes: [], voiceNotes: [] }
  );
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState('');
  const [editorPlainText, setEditorPlainText] = useState('');
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Escape key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Auto-save notes to parent on change
  const saveNotes = useCallback((updated: TaskNotes) => {
    setNotes(updated);
    onUpdateNotes(task.id, updated);
  }, [task.id, onUpdateNotes]);

  // Text note handlers
  const handleAddTextNote = () => {
    setIsAddingNew(true);
    setEditingNoteId(null);
    setEditorContent('');
    setEditorPlainText('');
  };

  const handleSaveTextNote = () => {
    if (!editorPlainText.trim()) return;
    const now = new Date().toISOString();

    if (editingNoteId) {
      const updated = {
        ...notes,
        textNotes: notes.textNotes.map(n =>
          n.id === editingNoteId
            ? { ...n, htmlContent: editorContent, plainText: editorPlainText, updatedAt: now }
            : n
        ),
      };
      saveNotes(updated);
      setEditingNoteId(null);
    } else {
      const newNote: TextNote = {
        id: `note-${Date.now()}`,
        htmlContent: editorContent,
        plainText: editorPlainText,
        createdAt: now,
        updatedAt: now,
      };
      saveNotes({ ...notes, textNotes: [...notes.textNotes, newNote] });
    }

    setIsAddingNew(false);
    setEditorContent('');
    setEditorPlainText('');
  };

  const handleEditTextNote = (note: TextNote) => {
    setEditingNoteId(note.id);
    setEditorContent(note.htmlContent);
    setEditorPlainText(note.plainText);
    setIsAddingNew(false);
  };

  const handleDeleteTextNote = (noteId: string) => {
    saveNotes({
      ...notes,
      textNotes: notes.textNotes.filter(n => n.id !== noteId),
    });
    if (editingNoteId === noteId) {
      setEditingNoteId(null);
      setEditorContent('');
    }
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setIsAddingNew(false);
    setEditorContent('');
    setEditorPlainText('');
  };

  // Voice note handlers
  const handleAddVoiceNote = (note: VoiceNote) => {
    saveNotes({ ...notes, voiceNotes: [...notes.voiceNotes, note] });
  };

  const handleDeleteVoiceNote = (noteId: string) => {
    saveNotes({
      ...notes,
      voiceNotes: notes.voiceNotes.filter(n => n.id !== noteId),
    });
  };

  const totalNotes = notes.textNotes.length + notes.voiceNotes.length;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{task.title}</h3>
            <p className="text-sm text-gray-500">{task.project} &middot; {totalNotes} note{totalNotes !== 1 ? 's' : ''}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-6 flex-shrink-0">
          <button
            onClick={() => setActiveTab('text')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'text'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Text Notes ({notes.textNotes.length})
          </button>
          <button
            onClick={() => setActiveTab('voice')}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'voice'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Voice Notes ({notes.voiceNotes.length})
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {activeTab === 'text' && (
            <div className="space-y-4">
              {/* Existing text notes */}
              {notes.textNotes.map(note => (
                <div key={note.id} className={`border rounded-lg overflow-hidden ${editingNoteId === note.id ? 'border-blue-300 ring-1 ring-blue-200' : 'border-gray-200'}`}>
                  {editingNoteId === note.id ? (
                    <div>
                      <RichTextEditor
                        content={editorContent}
                        onChange={(html, text) => { setEditorContent(html); setEditorPlainText(text); }}
                        placeholder="Edit your note..."
                      />
                      <div className="flex items-center gap-2 p-3 bg-gray-50 border-t border-gray-200">
                        <button
                          onClick={handleSaveTextNote}
                          className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 font-medium"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-gray-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="group">
                      <div
                        className="px-4 py-3 prose prose-sm max-w-none text-gray-800 cursor-pointer hover:bg-gray-50 transition-colors"
                        dangerouslySetInnerHTML={{ __html: note.htmlContent }}
                        onClick={() => handleEditTextNote(note)}
                      />
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-100 text-xs text-gray-400">
                        <span>
                          {new Date(note.updatedAt).toLocaleString()}
                          {note.updatedAt !== note.createdAt && ' (edited)'}
                        </span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleEditTextNote(note)}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTextNote(note.id)}
                            className="text-red-400 hover:text-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* New note editor */}
              {isAddingNew && (
                <div className="border border-blue-300 ring-1 ring-blue-200 rounded-lg overflow-hidden">
                  <RichTextEditor
                    content={editorContent}
                    onChange={(html, text) => { setEditorContent(html); setEditorPlainText(text); }}
                    placeholder="Write your note here... Use the toolbar for formatting."
                  />
                  <div className="flex items-center gap-2 p-3 bg-gray-50 border-t border-gray-200">
                    <button
                      onClick={handleSaveTextNote}
                      disabled={!editorPlainText.trim()}
                      className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Save Note
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-gray-200"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Add note button */}
              {!isAddingNew && !editingNoteId && (
                <button
                  onClick={handleAddTextNote}
                  className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:text-blue-600 hover:border-blue-300 transition-colors text-sm font-medium"
                >
                  + Add Text Note
                </button>
              )}
            </div>
          )}

          {activeTab === 'voice' && (
            <VoiceRecorder
              voiceNotes={notes.voiceNotes}
              onAddNote={handleAddVoiceNote}
              onDeleteNote={handleDeleteVoiceNote}
            />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

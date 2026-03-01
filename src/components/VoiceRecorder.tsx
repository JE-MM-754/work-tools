'use client';

import { useState, useRef, useEffect } from 'react';
import { VoiceNote } from '@/types/kanban';

interface VoiceRecorderProps {
  voiceNotes: VoiceNote[];
  onAddNote: (note: VoiceNote) => void;
  onDeleteNote: (noteId: string) => void;
}

export default function VoiceRecorder({ voiceNotes, onAddNote, onDeleteNote }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isSupported, setIsSupported] = useState(true);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !navigator.mediaDevices?.getUserMedia) {
      setIsSupported(false);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader.result as string;
          const note: VoiceNote = {
            id: `voice-${Date.now()}`,
            audioDataUrl: dataUrl,
            duration: recordingTime,
            createdAt: new Date().toISOString(),
          };
          onAddNote(note);
        };
        reader.readAsDataURL(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch {
      setIsSupported(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const playNote = (note: VoiceNote) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (playingId === note.id) {
      setPlayingId(null);
      return;
    }
    const audio = new Audio(note.audioDataUrl);
    audioRef.current = audio;
    setPlayingId(note.id);
    audio.onended = () => {
      setPlayingId(null);
      audioRef.current = null;
    };
    audio.play();
  };

  if (!isSupported) {
    return (
      <div className="text-center py-8 text-gray-500">
        <div className="text-3xl mb-2">&#127908;</div>
        <p className="text-sm">Voice recording is not supported in your browser.</p>
        <p className="text-xs mt-1">Please use Chrome, Firefox, or Edge for voice notes.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Recording Controls */}
      <div className="flex items-center justify-center gap-4 py-4">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium text-sm shadow-md transition-all hover:shadow-lg"
          >
            <span className="w-3 h-3 bg-white rounded-full"></span>
            Record
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <button
              onClick={stopRecording}
              className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-800 text-white rounded-full font-medium text-sm shadow-md transition-all animate-recording"
            >
              <span className="w-3 h-3 bg-red-400 rounded-sm"></span>
              Stop
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-gray-700 font-medium">{formatTime(recordingTime)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Voice Notes List */}
      {voiceNotes.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recordings ({voiceNotes.length})</h4>
          {voiceNotes.map(note => (
            <div key={note.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 group">
              <button
                onClick={() => playNote(note)}
                className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors ${
                  playingId === note.id ? 'bg-blue-600' : 'bg-gray-400 hover:bg-blue-500'
                }`}
              >
                {playingId === note.id ? (
                  <span className="text-xs font-bold">| |</span>
                ) : (
                  <span className="text-xs ml-0.5">&#9654;</span>
                )}
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 font-medium">
                  {note.label || `Recording ${voiceNotes.indexOf(note) + 1}`}
                </p>
                <p className="text-xs text-gray-400">
                  {formatTime(note.duration)} &middot; {new Date(note.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => onDeleteNote(note.id)}
                className="flex-shrink-0 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                title="Delete recording"
              >
                <span className="text-lg">&times;</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {voiceNotes.length === 0 && !isRecording && (
        <p className="text-center text-sm text-gray-400 py-4">
          No voice notes yet. Click Record to get started.
        </p>
      )}
    </div>
  );
}

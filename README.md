# AI Kanban Dashboard

An AI-powered Kanban board that automatically spawns AI agents when tasks are moved to the **Start / Launch** column. Built with Next.js 14, TypeScript, Tailwind CSS, and @dnd-kit for drag-and-drop.

## Features

### Phase 1 — Kanban Board
- **Drag-and-drop** task management across 5 columns (Backlog → Start → In Progress → Review → Complete)
- **Task creation** with categories, priorities, and tags
- **Responsive** dark-mode UI with smooth animations

### Phase 2 — AI Agent Integration
- **Automatic agent spawning**: Drop a task into "Start / Launch" to trigger the appropriate AI agent
- **Agent type routing**: Tasks are routed to agents based on category:
  - \`code\` → Codex Agent (runtime: \`acp\`)
  - \`research\` / \`analysis\` → Research Agent (runtime: \`subagent\`)
  - \`business\` → Business Agent (runtime: \`subagent\`)
  - \`design\` / \`general\` → Claude Code Agent (runtime: \`subagent\`)
- **Real-time progress** tracking with animated progress bars
- **Agent lifecycle**: Pause, cancel, and retry agent tasks
- **Automatic task progression**: Tasks move from In Progress → Review when agents complete
- **API endpoints**:
  - \`POST /api/spawn-agent\` — Spawn an AI agent for a task
  - \`POST /api/update-task\` — Update task status programmatically
  - \`GET /api/task-status\` — Check task/agent status

### OpenClaw Integration
When configured with an API key, the dashboard connects to OpenClaw's \`sessions_spawn\` API for real agent orchestration. Without configuration, it runs in **demo mode** with simulated agent progress.

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

### Environment Variables (Optional)

Copy \`.env.example\` to \`.env.local\` and configure:

\`\`\`
OPENCLAW_API_URL=https://api.openclaw.io
OPENCLAW_API_KEY=your-api-key
\`\`\`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Drag & Drop**: @dnd-kit/core + @dnd-kit/sortable
- **Deployment**: Vercel

## Project Structure

\`\`\`
src/
├── app/
│   ├── api/
│   │   ├── spawn-agent/route.ts    # Agent spawning endpoint
│   │   ├── update-task/route.ts    # Task update endpoint
│   │   └── task-status/route.ts    # Status polling endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── KanbanBoard.tsx             # Main board with DnD context
│   ├── Column.tsx                  # Droppable column container
│   ├── TaskCard.tsx                # Draggable task card
│   ├── AgentStatusBadge.tsx        # Agent status indicator
│   └── AddTaskModal.tsx            # New task creation modal
├── lib/
│   ├── agent-config.ts             # Agent routing configuration
│   └── store.ts                    # In-memory data store
└── types/
    └── kanban.ts                   # TypeScript type definitions
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy — zero configuration needed

### Manual

\`\`\`bash
npm run build
npm start
\`\`\`

## License

MIT
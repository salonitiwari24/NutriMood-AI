# Nutri Mood Tracker

A mobile-first React + FastAPI app that helps users log meals, mood, and wearable summaries, then generates an AI-driven daily health snapshot with nutrition estimates, mood trends, and personalized tips.

## Features
- **Daily log**: Text notes, optional image URL, optional sensor JSON
- **AI summary**: Daily overview, nutrition analysis, mood trend, alerts, recommendations
- **Dashboard & history**: See latest insights and prior entries
- **Modern UI**: React, Vite, Tailwind CSS, shadcn/ui
- **API**: FastAPI backend with JSON-only responses

## Tech Stack
- Frontend: Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui, React Router, TanStack Query
- Backend: FastAPI (Python), OpenAI API (gpt-4o-mini)

## Project Structure
- `src/` frontend app (pages, components, hooks, styles)
- `server/` FastAPI app (`app.py`)
- `public/` static assets
- `vite.config.ts`, `tailwind.config.ts` build and styling config

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- (Optional for backend) Python 3.10+ and an `OPENAI_API_KEY`

### Frontend Setup
```bash
# from nutri-mood-tracker-main/nutri-mood-tracker-main
npm ci
npm run dev
# open http://localhost:8080
```

### Backend Setup (optional)
```bash
# from nutri-mood-tracker-main/server
python -m venv .venv
# PowerShell
.\.venv\Scripts\Activate.ps1
pip install -U pip fastapi uvicorn openai pydantic
$env:OPENAI_API_KEY = "YOUR_API_KEY_HERE"
uvicorn app:app --reload --port 8000
```

## API (FastAPI)
- `POST /log` — body: `{ text?: string, image_url?: string, sensor_json?: object }`
  - returns: JSON summary `{ daily_summary, nutrition_analysis, mood_trend, alerts, recommendations }`
- `GET /dashboard` — returns last summary (404 if none)
- `GET /history?limit=50` — returns most recent entries (default 50)
- `GET /alerts` — returns alerts from the latest summary

## Build
```bash
npm run build
npm run preview
```

## Teamwork & Contributions
This was a two-member team project. Suggested split:

- Member A (Frontend Lead)
  - Project scaffolding with Vite + TS, Tailwind, shadcn/ui
  - Implemented `MobileLayout`, navigation, and pages (`Dashboard`, `DailyLog`, `History`, `Insights`, `Profile`, `NotFound`)
  - UI components integration (cards, forms, charts, toasts, tooltips, etc.)
  - Client-side routing and state with React Router + TanStack Query
  - Build, lint fixes, and UI polish

- Member B (Backend & Integration Lead)
  - Designed FastAPI app (`server/app.py`), request/response models, and routes
  - Implemented AI summary generation with OpenAI JSON-only responses and safe fallbacks
  - In-memory storage for logs and history
  - API error handling and minimal schema validation
  - Local dev instructions and environment configuration (OPENAI_API_KEY)

Both members collaborated on testing, UX decisions, and documentation.

## License
For academic/assignment use. Replace or add a license as needed.

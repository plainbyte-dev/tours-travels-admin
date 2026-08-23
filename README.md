# Tour Package Admin

An internal admin panel for creating and managing Nepal tour packages. Two plain apps, no monorepo tooling:

```
/backend   -> Express + TypeScript API (Mongoose/MongoDB)
/frontend  -> Next.js (App Router) admin UI
```

## Prerequisites

- Node.js 20+
- A running MongoDB instance (local `mongod`, Docker, or Atlas)

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env   # adjust MONGODB_URI etc. if needed
npm run seed            # inserts 3 sample packages
npm run dev              # starts the API on http://localhost:4000
```

`.env` variables:

| Variable | Description |
|---|---|
| `PORT` | Port the API listens on (default `4000`) |
| `MONGODB_URI` | MongoDB connection string |
| `CLIENT_ORIGIN` | Origin allowed by CORS (the Next.js app's URL) |

## 2. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev                    # starts the admin UI on http://localhost:3000
```

`.env.example` defaults `NEXT_PUBLIC_API_URL` to the deployed backend. For local development against your local API instead, edit `.env.local` and set it to `http://localhost:4000`.

Visit `http://localhost:3000` — it redirects to `/admin/packages`.

## Deployment

- **Frontend:** [tours-travels-admin.vercel.app](https://tours-travels-admin.vercel.app) (Vercel). Set `NEXT_PUBLIC_API_URL` in the Vercel project's environment variables to the backend URL below, then redeploy — `NEXT_PUBLIC_*` vars are inlined at build time, so changing them requires a fresh build.
- **Backend:** [tours-travels-admin.onrender.com](https://tours-travels-admin.onrender.com) (Render). Root directory `backend`, build command `npm install && npm run build`, start command `npm start`. Requires `MONGODB_URI` (Atlas), `CLIENT_ORIGIN` (comma-separated list including the Vercel URL) set in Render's environment variables.

## Project structure

**Backend** (`/backend/src`)

- `models/` — Mongoose schema (`Package`)
- `schemas/` — Zod validation schema (`package.schema.ts`, source of truth for shape/rules)
- `constants/` — the duration → itinerary day-count rule, shared by validation on both sides
- `routes/`, `controllers/`, `middleware/` — REST API for `/api/admin/packages` and `/api/admin/upload`
- `seed.ts` — sample data script

**Frontend** (`/frontend`)

- `app/admin/packages/` — list, create (`new/`), and edit (`[id]/edit/`) pages
- `components/admin/` — `PackageForm` and its section components (basic details, best time to visit, description, itinerary, cost), plus the packages table
- `schemas/`, `constants/` — duplicated copies of the backend's Zod schema and duration rule (kept in sync by hand; see `NOTES.md`)
- `lib/` — API client, form-error helpers, local-draft persistence

## Notes

See [NOTES.md](NOTES.md) for what's intentionally stubbed for later phases.

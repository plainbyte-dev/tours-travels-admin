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
cp .env.example .env.local   # adjust NEXT_PUBLIC_API_URL if the API isn't on :4000
npm run dev                    # starts the admin UI on http://localhost:3000
```

Visit `http://localhost:3000` — it redirects to `/admin/packages`.

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

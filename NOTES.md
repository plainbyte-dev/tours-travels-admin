# Stubbed / deferred for later phases

- **Auth.** `requireAdmin` (`backend/src/middleware/requireAdmin.ts`) is a no-op stub wired into every write route. Swapping in real JWT-based auth is a one-file change plus a login flow on the client — neither exists yet.
- **Cloud image storage.** Uploads go to local disk (`backend/uploads`) served via `express.static`. No S3/Cloudinary integration, no CDN, no image resizing/optimization.
- **Multi-category support.** `category` is a Zod enum with a single value (`nepal-tours`), rendered as a locked select on the client. Adding categories means extending the enum and likely branching the form/itinerary rules per category.
- **Package search / filter.** The list page (`/admin/packages`) shows everything with no pagination, search, or filtering by destination/status/etc.
- **File deletion on remove.** Removing an image from an itinerary day in the form only drops its URL from that day's `images` array — the uploaded file stays on disk. There's no delete-file endpoint or orphan cleanup.
- **Update semantics.** `PATCH /api/admin/packages/:id` expects the *whole* package body (same shape as `POST`), not a partial patch — the edit page always resubmits the full form. True partial updates aren't implemented.

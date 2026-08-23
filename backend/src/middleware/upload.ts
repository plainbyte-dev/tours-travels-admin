import crypto from 'crypto';
import path from 'path';
import multer, { type FileFilterCallback } from 'multer';
import type { Request } from 'express';
import { ApiError } from '../utils/ApiError';

const UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads');

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${crypto.randomUUID()}${ext}`);
  },
});

function fileFilter(_req: Request, file: Express.Multer.File, cb: FileFilterCallback): void {
  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(new ApiError(400, 'Only JPEG, PNG, and WEBP images are allowed'));
    return;
  }
  cb(null, true);
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024, files: 10 },
});

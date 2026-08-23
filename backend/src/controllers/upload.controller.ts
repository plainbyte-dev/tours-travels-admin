import type { Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';
import { sendSuccess } from '../utils/apiResponse';

export function uploadImages(req: Request, res: Response): void {
  const files = (req.files as Express.Multer.File[] | undefined) ?? [];
  if (files.length === 0) {
    throw new ApiError(400, 'No images uploaded');
  }
  const urls = files.map((file) => `/uploads/${file.filename}`);
  sendSuccess(res, { urls }, 201);
}

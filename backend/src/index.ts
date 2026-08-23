import 'dotenv/config';
import path from 'path';
import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import { connectDB } from './config/db';
import { errorHandler } from './middleware/errorHandler';
import packageRoutes from './routes/package.routes';
import uploadRoutes from './routes/upload.routes';
import { ApiError } from './utils/ApiError';

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tours-travels';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Express + TypeScript server is running!' });
});

app.use('/api/admin/packages', packageRoutes);
app.use('/api/admin', uploadRoutes);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new ApiError(404, 'Route not found'));
});

app.use(errorHandler);

connectDB(MONGODB_URI).then(() => {
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
});

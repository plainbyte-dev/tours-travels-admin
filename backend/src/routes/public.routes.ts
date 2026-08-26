import { Router } from 'express';
import { getPublishedPackageById, listPublishedPackages } from '../controllers/package.controller';
import { validateObjectId } from '../middleware/validateObjectId';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/packages', asyncHandler(listPublishedPackages));
router.get('/packages/:id', validateObjectId, asyncHandler(getPublishedPackageById));

export default router;

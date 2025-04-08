import { Router } from 'express';
import { ReviewController } from './review.controller';

const router = Router();
router.get('/', ReviewController.getReviewsFromFiverr);
export const ReviewRoutes = router;

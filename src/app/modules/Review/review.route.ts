import { Router } from 'express';
import { ReviewController } from './review.controller';
import { upload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';
const router = Router();

router.post(
  '/',
  upload.single('file'),
  parseBody,
  ReviewController.createReview,
);
router.patch(
  '/:reviewId',
  upload.single('file'),
  parseBody,
  ReviewController.reviewUpdate,
);
router.delete('/:reviewId', ReviewController.deleteReview);
export const ReviewRoutes = router;

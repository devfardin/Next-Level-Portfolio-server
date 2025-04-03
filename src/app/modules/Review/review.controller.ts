import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewService } from './review.service';
const getReviewsFromFiverr = catchAsync(async (req, res) => {
  const userName = req.query.username?.toString() || '';
  const result = await ReviewService.reviewsScrapt(userName);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Reviews retrieved successfully',
    data: result,
  });
});
export const ReviewController = {
  getReviewsFromFiverr,
};

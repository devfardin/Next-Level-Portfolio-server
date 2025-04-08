import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewsService } from './review.service';
import { IImageFile } from '../../interface/IImageFile';
const createReview = catchAsync(async (req, res) => {
  const result = await ReviewsService.createReviews(
    req.body,
    req.file as IImageFile,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: '🎉 Thank you! Your review was added successfully.',
    data: result,
  });
});
const reviewUpdate = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  const result = await ReviewsService.updateReview(
    reviewId,
    req.body,
    req.file as IImageFile,
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review updated successfully.',
    data: result,
  });
});
const deleteReview = catchAsync(async (req, res) => {
  const { reviewId } = req.params;
  const result = await ReviewsService.deleteReview(reviewId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Review deleted successfully.',
    data: result,
  });
});
export const ReviewController = {
  createReview,
  reviewUpdate,
  deleteReview,
};

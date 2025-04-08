import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewsService } from './review.service';
import { IImageFile } from '../../interface/IImageFile';
const getReviewsFromFiverr = catchAsync(async (req, res) => {
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
export const ReviewController = {
  getReviewsFromFiverr,
};

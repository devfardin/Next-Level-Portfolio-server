import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
const getReviewsFromFiverr = catchAsync(async (req, res) => {
  const username = req.query.username?.toString() || '';
  console.log(username);

  const result = await ReviewService.reviewsScrapt(username);
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

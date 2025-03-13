import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceService } from './service.service';

const createServiceIntoDB = catchAsync(async (req, res) => {
  const result = await ServiceService.createServiceIntoDB(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service created successfully! 🎉',
    data: result,
  });
});
export const ServiceController = {
  createServiceIntoDB,
};

import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceService } from './service.service';

const createServiceIntoDB = catchAsync(async (req, res) => {
  const result = await ServiceService.createServiceIntoDB(req.body, req.file);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service created successfully! 🎉',
    data: result,
  });
});
const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceService.getAllServices();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Services retrieved successfully.',
    data: result,
  });
});
const getSingleService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await ServiceService.getSingleService(serviceId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Services retrieved successfully.',
    data: result,
  });
});
export const ServiceController = {
  createServiceIntoDB,
  getAllServices,
  getSingleService,
};

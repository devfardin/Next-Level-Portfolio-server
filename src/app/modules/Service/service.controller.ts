import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceService } from './service.service';
import { Express } from 'express';

const createServiceIntoDB = catchAsync(async (req, res) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const file = files?.['file']?.[0]?.path;
  const icon = files?.['icon']?.[0]?.path;
  const result = await ServiceService.createServiceIntoDB(req.body, file, icon);

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
const delteeService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await ServiceService.deleteService(serviceId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'The service has been successfully deleted.',
    data: result,
  });
});
const updateService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await ServiceService.updateService(serviceId, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'The service has been successfully Updated',
    data: result,
  });
});
export const ServiceController = {
  createServiceIntoDB,
  getAllServices,
  getSingleService,
  delteeService,
  updateService,
};

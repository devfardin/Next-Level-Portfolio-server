import status from 'http-status';
import AppError from '../../errors/AppError';
import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (payload: TService) => {
  const result = await ServiceModel.create(payload);
  return result;
};

const getAllServices = async () => {
  const result = await ServiceModel.find();
  return result;
};

const getSingleService = async (serviceId: string) => {
  const service = await ServiceModel.findById(serviceId);
  if (!service) {
    throw new AppError(status.NOT_FOUND, 'Service not found');
  }
  return service;
};

const updateService = async (serviceId: string, payload: Partial<TService>) => {
  const service = await ServiceModel.findById(serviceId);
  if (!service) {
    throw new AppError(status.NOT_FOUND, 'Product Not Found');
  }
  return await ServiceModel.findByIdAndUpdate(serviceId, payload, {
    new: true,
  });
};

export const ServiceService = {
  createServiceIntoDB,
  getAllServices,
  getSingleService,
  updateService,
};

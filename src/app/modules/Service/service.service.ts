/* eslint-disable @typescript-eslint/no-explicit-any */
import status from 'http-status';
import AppError from '../../errors/AppError';
import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (payload: Partial<TService>, file: any) => {
  if (!file) {
    throw new AppError(status.BAD_REQUEST, 'Service Images is required');
  }
  payload.image = file.path;
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
    throw new AppError(status.NOT_FOUND, 'Service Not Found');
  }
  return await ServiceModel.findByIdAndUpdate(serviceId, payload, {
    new: true,
  });
};
const deleteService = async (serviceId: string) => {
  const result = await ServiceModel.findByIdAndDelete(serviceId);
  if (!result) {
    throw new AppError(status.NOT_FOUND, 'Service not Found');
  }
  return result;
};

export const ServiceService = {
  createServiceIntoDB,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};

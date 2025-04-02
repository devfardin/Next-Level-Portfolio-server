/* eslint-disable @typescript-eslint/no-explicit-any */
import status from 'http-status';
import AppError from '../../errors/AppError';
import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (
  payload: Partial<TService>,
  file: any,
  icon: any,
) => {
  if (!file) {
    throw new AppError(
      status.NOT_FOUND,
      'File not found. Please upload an image.',
    );
  }
  if (!icon) {
    throw new AppError(
      status.NOT_FOUND,
      'Icon not found. Please upload an icon',
    );
  }
  payload.image = file;
  payload.icon = icon;
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

// Service Delete function
const deleteService = async (serviceId: string) => {
  const service = await ServiceModel.findById(serviceId);
  if (!service) {
    throw new AppError(status.NOT_FOUND, 'Service not found');
  }
  const deteteService = await ServiceModel.findByIdAndDelete(serviceId);
  return deteteService;
};

// service update function
const updateService = async (
  serviceId: string,
  payload: Partial<TService>,
  file: any,
  icon: any,
) => {
  const isServiceExist = await ServiceModel.findById(serviceId);
  if (!isServiceExist) {
    throw new AppError(status.NOT_FOUND, 'This service not found');
  }
  if (file || icon) {
    payload.image = file;
    payload.icon = icon;
  }

  const result = await ServiceModel.findByIdAndUpdate(serviceId, payload, {
    new: true,
  });
  return result;
};

export const ServiceService = {
  createServiceIntoDB,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};

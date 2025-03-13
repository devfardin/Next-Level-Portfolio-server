import { TService } from './service.interface';
import { ServiceModel } from './service.model';

const createServiceIntoDB = async (payload: TService) => {
  const result = await ServiceModel.create(payload);
  return result;
};

export const ServiceService = {
  createServiceIntoDB,
};

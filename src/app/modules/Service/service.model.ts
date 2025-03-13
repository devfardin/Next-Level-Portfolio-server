import { model, Schema } from 'mongoose';
import { TService } from './service.interface';

const servicesSchema = new Schema<TService>({
  image: {
    type: String,
    trim: true,
  },
  icon: {
    type: String,
    trim: true,
    required: [true, 'Icon is required'],
  },
  title: {
    type: String,
    trim: true,
    required: [true, 'Title is required'],
  },
  shortDescription: {
    type: String,
    trim: true,
    required: [true, 'Short Description is required'],
  },
  description: {
    type: String,
    trim: true,
  },
});
export const ServiceModel = model<TService>('Service', servicesSchema);

import { model, Schema } from 'mongoose';
import { TReview } from './review.interface';

const reviewSchema = new Schema<TReview>({
  profile: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Client Title is required'],
    trim: true,
  },
  comment: {
    type: String,
    required: [true, 'Client experince is required'],
    trim: true,
  },
});
export const ReviewModel = model<TReview>('Reviews', reviewSchema);

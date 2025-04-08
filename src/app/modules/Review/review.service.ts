import status from 'http-status';
import AppError from '../../errors/AppError';
import { IImageFile } from '../../interface/IImageFile';
import { TReview } from './review.interface';
import { ReviewModel } from './review.modal';

// Create new Review
const createReviews = async (payload: TReview, profile: IImageFile) => {
  if (!profile) {
    const firstLatter = payload.name.slice(0, 1);
    payload.profile = firstLatter;
  } else {
    payload.profile = profile.path;
  }
  const result = await ReviewModel.create(payload);
  return result;
};
// Delete existing review01
const deleteReview = async (id: string) => {
  const result = await ReviewModel.findByIdAndDelete(id);
  return result;
};
const updateReview = async (
  id: string,
  payload: Partial<TReview>,
  profile: IImageFile,
) => {
  const serviceExist = await ReviewModel.findById(id);
  if (!serviceExist) {
    throw new AppError(status.NOT_FOUND, 'reviews is not found');
  }
  const clientProfile = profile?.path;
  if (clientProfile) {
    payload.profile = clientProfile;
  }
  const result = await ReviewModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const ReviewsService = {
  createReviews,
  updateReview,
  deleteReview,
};

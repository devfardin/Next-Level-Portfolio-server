import { IImageFile } from '../../interface/IImageFile';
import { TReview } from './review.interface';
import { ReviewModel } from './review.modal';

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

export const ReviewsService = {
  createReviews,
};

import { model, Schema } from 'mongoose';
import { IUserModel, TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
const UserSchema = new Schema<TUser, IUserModel>({
  name: {
    type: String,
    required: [true, 'User Name Is Required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'User Email Is Requires'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password Is Requires'],
    trim: true,
  },
});

UserSchema.pre('save', async function (next) {
  const user = this as TUser;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

UserSchema.statics.isUserExistByEmail = async function (email: string) {
  return await UserModel.findOne({ email: email });
};

UserSchema.statics.isPasswordMatch = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

export const UserModel = model<TUser, IUserModel>('User', UserSchema);

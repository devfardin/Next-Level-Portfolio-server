import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
const UserSchema = new Schema<TUser>({
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
export const UserModel = model<TUser>('User', UserSchema);

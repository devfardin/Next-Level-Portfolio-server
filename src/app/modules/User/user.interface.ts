import { Model } from 'mongoose';

export interface TUser {
  name: string;
  email: string;
  password: string;
  profile: string;
}
export interface IUserModel extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser>;
  isPasswordMatch(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

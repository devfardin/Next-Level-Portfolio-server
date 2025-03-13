/* eslint-disable @typescript-eslint/no-unused-vars */
import status from 'http-status';
import AppError from '../../errors/AppError';
import { UserModel } from '../User/user.model';
import { TLoginUser } from './auth.interface';
import { createToken, verifyToken } from './auth.utils';
import config from '../../config';

const loginUser = async (payload: TLoginUser) => {
  const isUserExist = await UserModel.isUserExistByEmail(payload?.email);

  // check the user is currect
  if (!isUserExist) {
    throw new AppError(
      status.NOT_FOUND,
      'Invalid User, Please check the provided credentials.',
    );
  }
  if (
    !(await UserModel.isPasswordMatch(payload.password, isUserExist?.password))
  ) {
    throw new AppError(status.FORBIDDEN, 'User Password do not match');
  }
  const jwtPayload = {
    name: isUserExist.name,
    email: isUserExist.email,
    profile: isUserExist?.profile,
  };
  // create access Token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_access_expires as string,
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_token as string,
    config.jwt_refresh_expires as string,
  );
  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  if (!token) {
    throw new AppError(status.UNAUTHORIZED, 'You are not Authorized User!');
  }
  const decoded = verifyToken(token, config.jwt_refresh_token as string);
  const { email, iat } = decoded;
  const isUserExist = await UserModel.isUserExistByEmail(email);

  // check the user is currect
  if (!isUserExist) {
    throw new AppError(
      status.NOT_FOUND,
      'Invalid User, Please check the provided credentials.',
    );
  }
  const jwtPayload = {
    name: isUserExist.name,
    email: isUserExist.email,
    profile: isUserExist?.profile,
  };

  // create access Token
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_access_expires as string,
  );

  return {
    accessToken,
  };
};
export const AuthService = {
  loginUser,
  refreshToken,
};

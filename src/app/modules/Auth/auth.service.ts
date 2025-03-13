import status from 'http-status';
import AppError from '../../errors/AppError';
import { UserModel } from '../User/user.model';
import { TLoginUser } from './auth.interface';

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
  };
  // create access Token
  const accessToken = createToken;
};

export const AuthService = {
  loginUser,
};

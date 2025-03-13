import status from 'http-status';
import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUser(req.body);
  const { accessToken, refreshToken } = result;
  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'Production',
    httpOnly: true,
  });
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User is logged in successfully!',
    data: {
      accessToken,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Access token is retrive successfully!',
    data: result,
  });
});

export const AuthController = {
  loginUser,
  refreshToken,
};

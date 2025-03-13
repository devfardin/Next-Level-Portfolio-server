import express from 'express';
import validationRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';
const router = express.Router();
router.post(
  '/login',
  validationRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser,
);
router.post('/refresh-token', AuthController.refreshToken);
export const AuthRoutes = router;

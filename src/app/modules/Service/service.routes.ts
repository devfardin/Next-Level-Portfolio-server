import express, { NextFunction, Request, Response } from 'express';
import { ServiceController } from './service.controller';
import { upload } from '../../config/multer.config';
const router = express.Router();

router.post(
  '/create',
  // upload.single('file'),
  // upload.single('icon'),
  upload.fields([
    { name: 'file', maxCount: 1 }, // Main image
    { name: 'icon', maxCount: 1 }, // Icon
  ]),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ServiceController.createServiceIntoDB,
);
router.delete('/:serviceId', ServiceController.delteeService);

router.get('/', ServiceController.getAllServices);
export const ServiceRoutes = router;

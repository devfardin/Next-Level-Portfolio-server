import express from 'express';
import { ServiceController } from './service.controller';
import { upload } from '../../config/multer.config';
import { parseBody } from '../../middlewares/bodyParser';
const router = express.Router();

router.post(
  '/create',
  upload.fields([
    { name: 'file', maxCount: 1 }, // Main image
    { name: 'icon', maxCount: 1 }, // Icon
  ]),
  parseBody,
  ServiceController.createServiceIntoDB,
);
router.delete('/:serviceId', ServiceController.delteeService);
router.get('/:serviceId', ServiceController.getSingleService);

// Update Function here
router.patch(
  '/:serviceId',
  upload.fields([
    { name: 'file', maxCount: 1 }, // Main image
    { name: 'icon', maxCount: 1 }, // Icon
  ]),
  parseBody,
  ServiceController.updateService,
);

router.get('/', ServiceController.getAllServices);
export const ServiceRoutes = router;

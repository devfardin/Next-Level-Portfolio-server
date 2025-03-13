import express from 'express';
import { ServiceController } from './service.controller';
const router = express.Router();
router.post('/create', ServiceController.createServiceIntoDB);
router.get('/', ServiceController.getAllServices);
export const ServiceRoutes = router;

import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { ServiceRoutes } from '../modules/Service/service.routes';

const router = Router();
const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

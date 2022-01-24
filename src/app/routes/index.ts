import { Router } from 'express';
import { cityRouter } from './routeCity';
import { clientRouter } from './routeClient';

const routes = Router();

routes.use(cityRouter);

routes.use(clientRouter);

export { routes };

import {Router} from 'express'
import { cityRouter} from './RouteCity'

const routes = Router();

routes.use(cityRouter);

export {routes};



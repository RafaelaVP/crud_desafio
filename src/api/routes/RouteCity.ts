import {Router} from 'express';
import { CityController } from "../controller/CityController";

const cityRouter = Router();

cityRouter.post('/cities', new CityController().create);
cityRouter.get('/cities', new CityController().findAll);
cityRouter.get ('/cities/:id', new CityController().getById);
cityRouter.put ('/cities/:id', new CityController().update);
cityRouter.delete ('/cities/:id', new CityController().delete);
export {cityRouter}; 
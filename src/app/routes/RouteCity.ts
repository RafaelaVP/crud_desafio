import { Router } from 'express';
import { CityController } from '../controller/CityController';
import validCreate from '../validation/cityValidation/create';
import validGet from '../validation/cityValidation/getAll';
import validUpdate from '../validation/cityValidation/update';
import validId from '../validation/getByidValid';

const cityRouter = Router();

cityRouter.post('/cities', validCreate, new CityController().create);
cityRouter.get('/cities', validGet, new CityController().findAll);
cityRouter.get('/cities/:id', validId, new CityController().getById);
cityRouter.put('/cities/:id', validUpdate, validId, new CityController().update);
cityRouter.delete('/cities/:id', validId, new CityController().delete);
export { cityRouter };

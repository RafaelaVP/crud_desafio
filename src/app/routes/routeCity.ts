import { Router } from 'express';
import { CityController } from '../controller/CityController';
import validCreate from '../validation/cityValidation/create';
import validGetAll from '../validation/cityValidation/getAll';
import validUpdate from '../validation/cityValidation/update';
import validId from '../validation/getByidValid';

const cityRouter = Router();

cityRouter.post('/api/cities', validCreate, new CityController().create);

cityRouter.get('/api/cities', validGetAll, new CityController().findAll);

cityRouter.get('/api/cities/:id', validId, new CityController().getById);

cityRouter.put('/api/cities/:id', validUpdate, validId, new CityController().update);

cityRouter.delete('/api/cities/:id', validId, new CityController().delete);

export { cityRouter };

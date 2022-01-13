import { Router } from 'express';
import { ClientController } from '../controller/ClientController';
import validCreate from '../validation/clientValidation/create';
import validGetAll from '../validation/clientValidation/getAll';
import validUpdate from '../validation/clientValidation/update';
import validGetById from '../validation/getByidValid';

const clientRouter = Router();

clientRouter.post('/clients', validCreate, new ClientController().create);
clientRouter.get('/clients', validGetAll, new ClientController().findAll);
clientRouter.get('/clients/:id', validGetById, new ClientController().getById);
clientRouter.put('/clients/:id', validUpdate, validGetById, new ClientController().update);
clientRouter.delete('/clients/:id', validGetById, new ClientController().delete);
export { clientRouter };

import { Router } from 'express';
import { ClientController } from '../controller/ClientController';
import validCreate from '../validation/clientValidation/create';
import validGetAll from '../validation/clientValidation/getAll';
import validUpdate from '../validation/clientValidation/update';
import validGetById from '../validation/getByidValid';

const clientRouter = Router();

clientRouter.post('/api/clients', validCreate, new ClientController().create);
clientRouter.get('/api/clients', validGetAll, new ClientController().findAll);
clientRouter.get('/api/clients/:id', validGetById, new ClientController().getById);
clientRouter.put('/api/clients/:id', validUpdate, new ClientController().update);
clientRouter.delete('/api/clients/:id', validGetAll, new ClientController().delete);
clientRouter.get('/api/clients/name/:name', new ClientController().getByName);
export { clientRouter };

import { Router } from 'express';
import { ClientController } from '../controller/ClientController';
import validCreate from '../validation/clientValidation/create';
import validUpdate from '../validation/clientValidation/update';


const clientRouter = Router();

clientRouter.post('/api/clients', validCreate, new ClientController().create);
clientRouter.get('/api/clients',  new ClientController().findAll);
clientRouter.get('/api/clients/:id', new ClientController().getById);
clientRouter.put('/api/clients/:id', validUpdate, new ClientController().update);
clientRouter.delete('/api/clients/:id', new ClientController().delete);

export { clientRouter };

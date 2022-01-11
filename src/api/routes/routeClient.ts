import {Router} from 'express';
import { ClientController } from '../controller/ClientController';

const clientRouter = Router();

clientRouter.post('/clients', new ClientController().create);
clientRouter.get('/clients', new ClientController().findAll);
clientRouter.get ('/clients/:id', new ClientController().getById);
clientRouter.put ('/clients/:id', new ClientController().update);
clientRouter.delete ('/clients/:id', new ClientController().delete);
export {clientRouter}; 
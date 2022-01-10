import {Router} from 'express';
import { CityController } from "../controller/CityController";

const cityRouter = Router();

cityRouter.post('/cities', new CityController().create);


export {cityRouter};
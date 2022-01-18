import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import './infra/database';
import { routes } from './app/routes';

const app = express();

app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };

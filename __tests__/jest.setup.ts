import { getConnection } from 'typeorm';
import '../src/infra/database';

beforeAll(async () => {});

afterAll(async () => {
  getConnection(process.env.NODE_ENV).close();
});

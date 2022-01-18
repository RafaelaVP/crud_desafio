import { getConnection } from 'typeorm';
import { connection } from '../src/infra/database';

beforeAll(async () => {
  await connection();
});

beforeEach(async () => {
  const entities = getConnection(process.env.NODE_ENV).entityMetadatas;

  // eslint-disable-next-line no-restricted-syntax
  for (const entity of entities) {
    const repository = getConnection(process.env.NODE_ENV).getRepository(entity.name);
    // eslint-disable-next-line no-await-in-loop
    await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
  }
});

afterAll(async () => {
  getConnection(process.env.NODE_ENV).close();
});

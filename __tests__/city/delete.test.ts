import request from 'supertest';
import { app } from '../../src/app';

describe('listar client pelo id', () => {
  it('retornar status', async () => {
    const clientMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/cities/').send(clientMock);

    const res = await request(app).delete(`/api/cities/${response.body.id}`);
    const { status } = res;
    expect(status).toBe(204);
  });
});

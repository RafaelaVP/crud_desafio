import request from 'supertest';
import { app } from '../../src/app';

describe('listar todos os clientes', () => {
  it('retornar status 200', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    await request(app).post('/api/cities/').send(cityMock);

    const response = await request(app).get('/api/cities/');
    const { body } = response;
    const { cities } = body;
    expect(cities[0].city).toBe(cityMock.city);
    expect(cities[0].state).toBe(cityMock.state);
    const { status } = response;
    expect(status).toBe(200);
  });
});

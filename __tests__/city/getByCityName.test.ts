import request from 'supertest';
import { app } from '../../src/app';

describe('listar client pelo id', () => {
  it('retornar status 200', async () => {
    const clientMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/cities/').send(clientMock);

    const res = await request(app).get(`/api/cities/name/${response.body.city}`);
    expect(res.body).toHaveProperty('city');
    const { status, body } = res;
    expect(body.city).toBe(response.body.city);
    expect(status).toBe(200);
  });
  it('returns bad request ', async () => {
    const cityMockName = '';
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    await request(app).post('/api/cities/').send(cityMock);
    const res = await request(app).get(`/api/cities/name/${cityMockName}`);
    const { status } = res;
    expect(status).toBe(400);
  });
});

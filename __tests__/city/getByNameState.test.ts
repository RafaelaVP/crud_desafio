import request from 'supertest';
import { app } from '../../src/app';

describe('listar client pelo id', () => {
  it('retornar status 200', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/cities/').send(cityMock);

    const res = await request(app).get(`/api/cities/name/state/${response.body.state}`);
    expect(res.body).toHaveProperty('state');
    const { status, body } = res;
    expect(body.state).toBe(response.body.state);
    expect(status).toBe(200);
  });
  it('returns bad request ', async () => {
    const errorName = '';
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    await request(app).post('/api/cities/').send(cityMock);
    const res = await request(app).get(`/api/cities/name/${errorName}`);
    const { status } = res;
    expect(status).toBe(400);
  });
});

import request from 'supertest';
import { app } from '../../src/app';

describe('create client', () => {
  it('returns status 201', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const response = await request(app).post('/api/cities/').send(cityMock);
    expect(response.statusCode).toEqual(201);

    expect(response.body).toHaveProperty('id');
  });
  it('returns bad request ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'Rk'
    };
    const res = await request(app).post('/api/cities/').send(cityMock);
    expect(res.statusCode).toEqual(400);
  });
});

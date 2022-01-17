import request from 'supertest';
import { app } from '../../src/app';

describe('create client', () => {
  it('returns status 201', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };
    const response = await request(app).post('/api/cities/').send(cityMock);
    expect(response.statusCode).toEqual(201);

    expect(response.body).toHaveProperty('_id');
  });
  it('returns bad request ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };
    const res = await request(app).post('/api/cities/').send(cityMock);
    expect(res.statusCode).toEqual(400);
  });
});

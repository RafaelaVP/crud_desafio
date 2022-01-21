import request from 'supertest';
import { app } from '../../src/app';

describe('delete city by id', () => {
  it('return status 204  ', async () => {
    const clientMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/cities/').send(clientMock);

    const res = await request(app).delete(`/api/cities/${response.body.id}`);
    const { status } = res;
    expect(status).toBe(204);
  });
  it('returns bad', async () => {
    const idError = '4a271b3e-2c2e-477f-ab58-4a5ebc35dec1'
    const clientMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/cities/').send(clientMock);

    const res = await request(app).delete(`/api/cities/${idError}`);
    const { status } = res;
    expect(status).toBe(404);

  });

});



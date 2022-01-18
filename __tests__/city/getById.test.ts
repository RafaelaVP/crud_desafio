import request from 'supertest';
import { app } from '../../src/app';

describe('listar client pelo id', () => {
  it('retornar status 200', async () => {
    const Mockcity = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/cities/').send(Mockcity);

    const res = await request(app).get(`/api/cities/${response.body.id}`);
    expect(res.body).toHaveProperty('id');
    const { status, body } = res;
    expect(body.id).toBe(response.body.id);
    expect(status).toBe(200);
  });
  it('returns bad request ', async () => {
    const idName = 798;
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    await request(app).post('/api/cities/').send(cityMock);
    const res = await request(app).get(`/api/cities/${idName}`);
    const { status } = res;
    expect(status).toBe(400);
  });
});

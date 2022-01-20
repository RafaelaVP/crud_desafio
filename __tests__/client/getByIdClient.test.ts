import request from 'supertest';
import { app } from '../../src/app';

describe('Search customer by id', () => {
  it('returns status 200', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const resCity = await request(app).post('/api/cities/').send(cityMock);

    const clientMock = {
      name: 'Rafaela',
      gender: 'FEMININO',
      city_home: `${resCity.body.id}`,
      birthdate: '11/10/1995',
    };
    const response = await request(app).post('/api/clients/').send(clientMock);
    const res = await request(app).get(`/api/clients/${response.body.id}`);
    expect(res.body).toHaveProperty('id');
    const { status, body } = res;
    expect(body.id).toBe(response.body.id);
    expect(status).toBe(200);
  });
  it('returns bad request ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };
    const resC = await request(app).post('/api/cities/').send(cityMock);
    const idName = 798;
    const clientMock = {
      name: 'Rafaela',
      gender: 'FEMININO',
      city_home: `${resC.body.id}`,
      birthdate: '11/10/1995',
    };
    await request(app).post('/api/cities/').send(clientMock);
    const res = await request(app).get(`/api/cities/${idName}`);
    const { status } = res;
    expect(status).toBe(400);
  });
});

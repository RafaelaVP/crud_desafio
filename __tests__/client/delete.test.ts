import request from 'supertest';
import { app } from '../../src/app';

describe('delete by id', () => {
  it('returns status 204', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const resCity = await request(app).post('/api/cities/').send(cityMock);

    const clientMock = {
      name: 'Rafaela',
      gender: 'F',
      city_home: `${resCity.body.id}`,
      birthdate: '11/10/1995'
    };
    const response = await request(app).post('/api/clients/').send(clientMock);
    const res = await request(app).delete(`/api/clients/${response.body.id}`);
    const { status } = res;
    expect(status).toBe(204);
  });
  it('returns bad request', async () => {
    const idError = '4a271b3e-2c2e-477f-ab58-4a5ebc35dec1';
    const clientMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    await request(app).post('/api/clients/').send(clientMock);

    const res = await request(app).delete(`/api/clients/${idError}`);
    const { status } = res;
    expect(status).toBe(400);
  });
  it('returns not found 404 ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };
    const resC = await request(app).post('/api/cities/').send(cityMock);
    const clientMock = {
      name: 'Rafaela',
      gender: 'F',
      city_home: `${resC.body.id}`,
      birthdate: '11/10/1995'
    };
    await request(app).post('/api/cities/').send(clientMock);
    const response = await request(app).get(`/api/cities/${'4a271b3e-2c2e-477f-ab58-4a5ebc35dec1'}`);
    expect(response.body).toEqual({
      description: 'Not found',
      message: 'The ID: [object Object] was not found',
      statusCode: 404
    });
  });
});

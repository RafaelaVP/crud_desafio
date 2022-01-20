import request from 'supertest';
import { app } from '../../src/app';

describe('delete city by id', () => {
  it('returns status 201', async () => {
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
      age: 27
    };
    const response = await request(app).post('/api/clients/').send(clientMock);
    const res = await request(app).delete(`/api/clients/${response.body.id}`);
    const { status } = res;
    expect(status).toBe(204);
  });
  it('returns not found', async () => {
    const idError = '4a271b3e-2c2e-477f-ab58-4a5ebc35dec1'
    const clientMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/clients/').send(clientMock);

    const res = await request(app).delete(`/api/clients/${idError}`);
    const { status } = res;
    expect(status).toBe(404);

  });
});

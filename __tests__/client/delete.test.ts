import request from 'supertest';
import { app } from '../../src/app';

describe('create client', () => {
  it('returns status 201', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const resCity = await request(app).post('/api/cities/').send(cityMock);

    const clientMock = {
      name: 'Rafaela',
      gender: 'Feminino',
      city_home: `${resCity.body.id}`,
      birthdate: '1995-11-10T02:00:00.000Z',
      age: 27
    };
    const response = await request(app).post('/api/clients/').send(clientMock);
    const res = await request(app).delete(`/api/clients/${response.body.id}`);
    const { status } = res;
    expect(status).toBe(204);
  });
});

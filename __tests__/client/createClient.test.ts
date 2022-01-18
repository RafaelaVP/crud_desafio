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
      birthdate: '11/10/1995',
      age: 27
    };
    const response = await request(app).post('/api/clients/').send(clientMock);
    expect(response.statusCode).toEqual(201);
  });
  it('returns bad request ', async () => {
    const ErrorMock = {
      name: 'R',
      gender: 'F',
      city_home: 12,
      birthdate: '11/10/1995',
      age: 27
    };
    const res = await request(app).post('/api/cities/').send(ErrorMock);
    expect(res.statusCode).toEqual(400);
  });
});

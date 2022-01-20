import request from 'supertest';
import { app } from '../../src/app';

describe('Search all cities ', () => {
  it('return status 200', async () => {
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
    await request(app).post('/api/clients/').send(clientMock);
    const response = await request(app).get('/api/clients/');
    const { body } = response;
    const { clients } = body;
    expect(clients[0].name).toBe(clientMock.name);
    expect(clients[0].gender).toBe(clientMock.gender);
    expect(clients[0].city_home).toBe(clientMock.city_home);
    expect(clients[0].birthdate).toBe(clientMock.birthdate);
  

    const { status } = response;
    expect(status).toBe(200);
  });
});

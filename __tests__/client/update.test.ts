import request from 'supertest';
import { app } from '../../src/app';

describe('update client', () => {
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
      
    };
    const create = await request(app).post('/api/clients/').send(clientMock);
    const res = await request(app).get(`/api/clients/${create.body.id}`);
    expect(res.body).toHaveProperty('id');
    
    const clientUPMock = {
        name: 'Rafael',
        gender: 'MASCULINO',
        city_home: `${resCity.body.id}`,
        birthdate: '11/10/1995',
        
      };
    
    const response = await request(app).put(`/api/clients/${create.body.id}`).send(clientUPMock);
    expect(response.statusCode).toEqual(200);
  });
});

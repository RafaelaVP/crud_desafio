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
      gender: 'FEMININO',
      city_home: `${resCity.body.id}`,
      birthdate: '11/10/1995',
      
    };
    const response = await request(app).post('/api/clients/').send(clientMock);
    expect(response.statusCode).toEqual(201);
  });
  it('returns bad request status ', async () => {
    const errorMock = {};
    
    const res = await request(app).post('/api/clients/').send(errorMock);
    
    expect(res.statusCode).toEqual(400);
  });
  it('returns bad request message error', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const resCity = await request(app).post('/api/cities/').send(cityMock);

    const clientMock = {
      name: 'Rafaela',
      gender: 'FEMININO',
      city_home: '4a271b3e-2c2e-477f-ab58-4a5ebc35dec1',
      birthdate: '11/10/1995',
      
    };
    const response = await request(app).post('/api/clients/').send(clientMock);
    expect(response.body).toEqual({message:'error id city of table city does not exist'})
  });
  
});

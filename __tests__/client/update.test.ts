import request from 'supertest';
import { app } from '../../src/app';

describe('update client', () => {
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
    expect(response.statusCode).toEqual(204);
  });
  it('returns status 400 bad request', async () => {
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
        gender: 55,
        city_home: `${resCity.body.id}`,
        
        
      };
    
    const response = await request(app).put(`/api/clients/${create.body.id}`).send(clientUPMock);
    expect(response.statusCode).toEqual(400);
  });
  it('returns status bad request', async () => {
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
        
        
      };
    
    const response = await request(app).put(`/api/clients/${'4a271b3e-2c2e-477f-ab58-4a5ebc35dec1'}`).send(clientUPMock);
    expect(response.body).toEqual({message:'error trying to update with city id.'})

  });
  it('returns not found 404 ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };
    const resC = await request(app).post('/api/cities/').send(cityMock);
    const clientMock = {
      name: 'Rafaela',
      gender: 'FEMININO',
      city_home: `${resC.body.id}`,
      birthdate: '11/10/1995',
    };
    await request(app).post('/api/cities/').send(clientMock);
    const response = await request(app).get(`/api/cities/${'4a271b3e-2c2e-477f-ab58-4a5ebc35dec1'}`);
    const resp = await request(app).put(`/api/cities/${'4a271b3e-2c2e-477f-ab58-4a5ebc35dec1'}`);
    expect(response.body).toEqual({
      "description": "Not found",
      "message": "The ID: [object Object] was not found",
       "statusCode": 404,
    })
  });
  
});



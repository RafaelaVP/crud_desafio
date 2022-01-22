import request from 'supertest';
import { app } from '../../src/app';

describe('update client', () => {
  it('returns status 204 update', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const create = await request(app).post('/api/cities/').send(cityMock);
    
     const res = await request(app).get(`/api/cities/${create.body.id}`);
    expect(res.body).toHaveProperty('id');
    
    const cityUpMock = {
        city: 'Pelotas',
        state: 'RS'
      };
    
    const response = await request(app).put(`/api/cities/${create.body.id}`).send(cityUpMock);
    expect(response.statusCode).toEqual(204);
  });
  
  it('returns status 400 bad request', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const create = await request(app).post('/api/cities/').send(cityMock);
    
     const res = await request(app).get(`/api/cities/${create.body.id}`);
    expect(res.body).toHaveProperty('id');
    
    const cityUpMock = {
        city: 'Pelotas',
        state: 898
      };
    
    const response = await request(app).put(`/api/cities/${create.body.id}`).send(cityUpMock);
    expect(response.statusCode).toEqual(400);
  });
  it('returns status 400 bad request', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const create = await request(app).post('/api/cities/').send(cityMock);
    
     const res = await request(app).get(`/api/cities/${create.body.id}`);
    expect(res.body).toHaveProperty('id');
    
    const cityUpMock = {
        city: 'Porto Alegre',
        state: 'RS'
      };
    
    const response = await request(app).put(`/api/cities/${create.body.id}`).send(cityUpMock);
    expect(response.body).toEqual({
      "description": "Bad request",
      "message": " Already Exists"
  })
  });
  
});

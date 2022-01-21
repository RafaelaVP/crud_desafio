import request from 'supertest';
import { app } from '../../src/app';

describe('create client', () => {
  it('returns status 201', async () => {
    const cityMock = {
      city: 'Porto Alegre',
      state: 'RS'
    };
    const response = await request(app).post('/api/cities/').send(cityMock);
    expect(response.statusCode).toEqual(201);

    expect(response.body).toHaveProperty('id');
  });
  it('returns bad request ', async () => {
    const cityMock = {};
    
    const res = await request(app).post('/api/cities/').send();
    
    expect(res.statusCode).toEqual(400);
  });
  it('returns bad request ', async () => {
    const cityMock = {
      city: '',
      state:'RS'
    };
    
    const response = await request(app).post('/api/cities/').send(cityMock);
    
    expect(response.body).toEqual([{
      "description": "\"city\" is not allowed to be empty",
      "name": "city"
  }])
  });
});

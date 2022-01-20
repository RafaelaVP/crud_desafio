import request from 'supertest';
import { app } from '../../src/app';

describe('update client', () => {
  it('returns status 200 update', async () => {
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
    expect(response.statusCode).toEqual(200);
  });
});

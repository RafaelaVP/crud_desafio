import request from 'supertest';
import { app } from '../../src/app';

describe('delete city by id', () => {
  it('return status 204  ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    const response = await request(app).post('/api/cities/').send(cityMock);

    const res = await request(app).delete(`/api/cities/${response.body.id}`);
    const { status } = res;
    expect(status).toBe(200);
  });
  it('returns not found', async () => {

    const resp = await request(app).delete('/api/cities/04e966c9-88e0-442b-9802-397ca310d134');
    expect(resp.body).toEqual({
      "description": "Not found",
      "message": "The ID: 04e966c9-88e0-442b-9802-397ca310d134 was not found",
       "statusCode": 404,

    });
   
  });  

});



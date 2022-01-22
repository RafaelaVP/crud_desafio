import request from 'supertest';
import { app } from '../../src/app';

describe('Search all cities return status 200', () => {
  it('return status 200 ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    await request(app).post('/api/cities/').send(cityMock);

    const response = await request(app).get('/api/cities/');
    const { body } = response;
    const { cities } = body;
    expect(cities[0].city).toBe(cityMock.city);
    expect(cities[0].state).toBe(cityMock.state);
    const { status } = response;
    expect(status).toBe(200);
  });
  it('return bad request ', async () => {
    const cityMock = {
      city: 'Pelotas',
      state: 'RS'
    };

    await request(app).post('/api/cities/').send(cityMock);

    const response = await request(app).get('/api/cities/?id=12');
    const { status } = response;
    expect(status).toBe(400);
  });
});

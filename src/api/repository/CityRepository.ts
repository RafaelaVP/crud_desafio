import {getRepository} from 'typeorm';
import {City} from '../../entities/City';

export class CityRepository {
  async create(payload) : Promise<City | Error > {
    const {city, state} = payload;
    const repo = getRepository(City);
    const cities = repo.create({city, state});
    await repo.save(cities);
    return cities;
  }

}



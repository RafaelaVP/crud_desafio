import { getRepository } from 'typeorm';
import { City } from '../entities/City';
import { CityRequest } from '../types/RequestCity';

export class CityRepository {
  async create(payload: CityRequest) {
    return getRepository(City).save(payload);
  }

  async find(payload): Promise<City[] | Error> {
    const result = await getRepository(City).find(payload);
    return result;
  }

  async findOne(_id): Promise<City | Error> {
    const result = await getRepository(City).findOne(_id);
    return result;
  }

  async update(_id, payload) {
    return getRepository(City).update(_id, payload);
  }

  async delete(_id) {
    return getRepository(City).delete(_id);
  }
}

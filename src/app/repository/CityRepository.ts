import { getRepository } from 'typeorm';
import { City } from '../entities/City';
import { CityRequest } from '../types/city/RequestCreateCity';

export class CityRepository {
  async create(payload: CityRequest) {
    return getRepository(City).save(payload);
  }

  async find({ page = 1, limit = 10, ...query }): Promise<{} | Error> {
    const repo = await getRepository(City);
    const [cities, count] = await repo.findAndCount({
      take: limit,
      where: query
    });
    return { cities, totalCities: count, limit, offset: page };
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

import { City } from '../entities/City';
import { CityNotFound } from '../errors/CityNotFound';
import { CityRepository } from '../repository/CityRepository';
import { Icities } from '../interfaces/InterfaceCity';

const cityRepository = new CityRepository();

export class CityService {
  async create(payload): Promise<City | Error> {
    const result = await cityRepository.create(payload);
    return result;
  }

  async findAll({ page = 1, limit = 100, ...payload }): Promise<Icities> {
    const filter = {
      where: payload,
      take: limit
    };
    const [docs, count] = await cityRepository.find(filter);
    return { docs, total: count, limit, offset: page };
  }

  async findOne(_id): Promise<City | Error> {
    const city = await cityRepository.findOne(_id);
    if (!city) throw new CityNotFound(_id);
    return city;
  }

  async update(_id, payload) {
    const city = cityRepository.update(_id, payload);
    if (!city) throw new CityNotFound(_id);
    return city;
  }

  async delete(_id) {
    const city = await cityRepository.delete(_id);
    if (!city) throw new CityNotFound(_id);
    return city;
  }
}

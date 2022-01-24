import { City } from '../entities/City';
import { CityRepository } from '../repository/CityRepository';
import { Icities } from '../interfaces/InterfaceCity';
import { NotFound } from '../errors/NotFound';
import { AlreadyExists } from '../errors/AlreadyExistes';

const cityRepository = new CityRepository();
const cityRepo = new CityRepository();

export class CityService {
  async create(payload): Promise<City | Error> {
    const { city, state } = payload;
    const cities = await cityRepo.findOne({
      where: {
        city,
        state
      }
    });
    if (cities) throw new AlreadyExists();
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
    if (!city) throw new NotFound(_id);
    return city;
  }

  async update(_id, payload) {
    const { city, state } = payload;
    const cities = await cityRepo.findOne({
      where: {
        city,
        state
      }
    });
    if (cities) throw new AlreadyExists();
    await this.findOne(_id);
    return cityRepository.update(_id, payload);
  }

  async delete(_id) {
    await this.findOne(_id);
    return cityRepository.delete(_id);
  }
}

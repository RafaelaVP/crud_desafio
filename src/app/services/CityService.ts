import { City } from '../../entities/City';
import { CitytIdNotFound } from '../errors/city/cityNotFound';
import { CityRepository } from '../repository/CityRepository';
import { CityRequest } from '../types/city/RequestCreateCity';

const cityRepository = new CityRepository();

export class CityService {
  async create(payload: CityRequest): Promise<City | Error> {
    const result = await cityRepository.create(payload);
    return result;
  }

  async findAll(payload): Promise<{} | Error> {
    const cities = await cityRepository.find(payload);
    return cities;
  }

  async findOne(_id): Promise<City | Error> {
    const city = await cityRepository.findOne(_id);
    if (!city) throw new CitytIdNotFound(_id);
    return city;
  }

  async update(_id, payload) {
    return cityRepository.update(_id, payload);
  }

  async delete(_id) {
    return cityRepository.delete(_id);
  }
}
import { City } from "../../entities/City";
import { CityRepository } from "../repository/CityRepository";


const cityRepository = new CityRepository();

export class CityService {
  async create(payload): Promise<City | Error> {
    const city = await cityRepository.create(payload);
    return city;
  }
}
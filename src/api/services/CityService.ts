import { City } from "../../entities/City";
import { CityRepository } from "../repository/CityRepository";


const cityRepository = new CityRepository();

export class CityService {
  async create(payload): Promise<City | Error> {
    return await cityRepository.create(payload);   
  }
  async findAll(payload): Promise<City[] | Error> {
    const cities = await cityRepository.find(payload);
    return cities;
  }
    async findOne(_id): Promise<City | Error> {
    const city = await cityRepository.findOne(_id);
    return city;
   }
   async update(_id, payload) {
    return await cityRepository.update(_id, payload);   
   }
   async delete(_id) {
    return await cityRepository.delete(_id);
    
   }
}
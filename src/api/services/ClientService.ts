import { Client } from '../../entities/Client';
import { CityRepository } from '../repository/CityRepository';
import { ClientRepository } from '../repository/ClientRepository';

const clientRepository = new ClientRepository();
const cityRepository = new CityRepository();
export class ClientService {
  async create(payload): Promise<Client | Error> {
    const { cityHome } = payload;
    const city = await cityRepository.findCity({ city: cityHome });
    console.log(city);
    return clientRepository.create(payload);
  }

  async findAll(payload): Promise<Client[] | Error> {
    const clients = await clientRepository.find(payload);
    return clients;
  }

  async findOne(_id): Promise<Client | Error> {
    const client = await clientRepository.findOne(_id);
    return client;
  }

  async update(_id, payload) {
    return clientRepository.update(_id, payload);
  }

  async delete(_id) {
    return clientRepository.delete(_id);
  }
}

import { Client } from '../../entities/Client';
import { ClientRepository } from '../repository/ClientRepository';

const clientRepository = new ClientRepository();

export class ClientService {
  async create(payload): Promise<Client | Error> {
    return clientRepository.create(payload);
  }

  async findAll(payload): Promise<Client[] | Error> {
    const filter = {
      where: payload,
      relations: ['city']
    };
    const clients = await clientRepository.find(filter);
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

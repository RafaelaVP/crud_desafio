import { Client } from '../entities/Client';
import { ClientRepository } from '../repository/ClientRepository';

const clientRepository = new ClientRepository();

export class ClientService {
  async create(payload): Promise<Client | Error> {
    return clientRepository.create(payload);
  }

  async findAll({ page = 1, limit = 100, skip, ...payload }): Promise<{} | Error> {
    const filter = {
      where: payload,
      take: limit,
      skip,
      relations: ['city']
    };
    const [clients, count] = await clientRepository.find(filter);
    return { clients, totalClients: count, limit, offset: page };
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

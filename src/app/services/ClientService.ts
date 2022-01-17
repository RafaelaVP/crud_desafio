import { Client } from '../entities/Client';
import { ClientNotFound } from '../errors/ClientNotFound';
import { ClientRepository } from '../repository/ClientRepository';
import { FormatDate } from '../utils/format.Date';

const clientRepository = new ClientRepository();
const formatDate = new FormatDate();
export class ClientService {
  async create(payload): Promise<Client | Error> {
    return clientRepository.create(payload);
  }

  async findAll({ page = 1, limit = 100, ...payload }): Promise<{} | Error> {
    const filter = {
      where: payload,
      take: limit,
      relations: ['city']
    };
    const [clients, count] = await clientRepository.find(filter);
    return { clients, totalClients: count, limit, offset: page };
  }

  async findOne(_id): Promise<Client | Error> {
    const client = await clientRepository.findOne(_id);
    Object.assign(client, {
      birthdate: formatDate.formatDateToRequest(client.birthdate)
    });
    if (!client) throw new ClientNotFound(_id);
    return client;
  }

  async update(_id, payload) {
    const client = await clientRepository.update(_id, payload);
    return client;
  }

  async delete(_id) {
    const result = await clientRepository.delete(_id);
    if (!result) throw new ClientNotFound(_id);
    return result;
  }

  async findByNameClient(name): Promise<Client | Error> {
    const result = await clientRepository.findByNameClient(name);
    Object.assign(result, {
      birthdate: formatDate.formatDateToRequest(result.birthdate)
    });
    return result;
  }

  async updateName(_id, payload) {
    const city = clientRepository.updateName(_id, payload);
    if (!city) throw new ClientNotFound(_id);
    return city;
  }
}

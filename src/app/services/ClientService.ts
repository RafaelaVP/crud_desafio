import { Client } from '../entities/Client';
import { ClientRepository } from '../repository/ClientRepository';
import { Iclients } from '../interfaces/InterfaceClient';
import { NotFound } from '../errors/NotFound';
import { AlreadyExists } from '../errors/AlreadyExistes';

const clientRepository = new ClientRepository();
const clientRepo = new ClientRepository();
export class ClientService {
  async create(payload): Promise<Client | Error> {
    const { name } = payload;
    const clients = await clientRepo.findOne({
      where: {
        name
      }
    });
    if (clients) throw new AlreadyExists();
    return clientRepository.create(payload);
  }

  async findAll({ relations = 'city', ...payload }): Promise<Iclients> {
    const result = await clientRepository.findAll({ relations, ...payload });
    return result;
  }

  async findOne(_id) {
    const client = await clientRepository.findOne(_id);
    if (!client) throw new NotFound(_id);
    return client;
  }

  async update(_id, payload) {
    await this.findOne(_id);
    return clientRepository.update(_id, payload);
  }

  async delete(_id) {
    await this.findOne(_id);
    return clientRepository.delete(_id);
  }
}

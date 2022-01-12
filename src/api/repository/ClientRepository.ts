import { getRepository } from 'typeorm';
import { Client } from '../../entities/Client';

export class ClientRepository {
  async create(payload): Promise<Client | Error> {
    return getRepository(Client).save(payload);
  }

  async find(payload): Promise<Client[] | Error> {
    const result = await getRepository(Client).find(payload);
    return result;
  }

  async findOne(_id): Promise<Client | Error> {
    const result = await getRepository(Client).findOne(_id);
    return result;
  }

  async update(_id, payload) {
    return getRepository(Client).update(_id, payload);
  }

  async delete(_id) {
    return getRepository(Client).delete(_id);
  }
}

import moment from 'moment';
import { Client } from '../entities/Client';
import { ClientNotFound } from '../errors/ClientNotFound';
import { ClientRepository } from '../repository/ClientRepository';
import { Iclients } from '../interfaces/InterfaceClient';

const clientRepository = new ClientRepository();

export class ClientService {
  async create(payload): Promise<Client | Error> {
    payload.birthdate = new Date(moment(payload.birthdate, 'DD/MM/YYYY').format('YYYY-MM-DD'));
    return clientRepository.create(payload);
  }

  async findAll({ page = 1, limit = 100, ...payload }): Promise<Iclients> {
    const filter = {
      where: payload,
      take: limit,
      relations: ['city']
    };
    const [docs, count] = await clientRepository.find(filter);
     return { docs, total: count, limit, offset: page}
  }

  async findOne(_id) {
    const client = await clientRepository.findOne(_id);
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
}

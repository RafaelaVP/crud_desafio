import moment from 'moment';
import { Client } from '../entities/Client';
import { ClientRepository } from '../repository/ClientRepository';
import { Iclients } from '../interfaces/InterfaceClient';
import { NotFound } from '../errors/NotFound';

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
    if (!client) throw new NotFound(_id);
    return client;
  }

  async update(_id, payload) {
    const findClient = await this.findOne(_id);
    if (!findClient) throw new NotFound(_id);
    return clientRepository.update( _id , payload);
    
  }

  async delete(_id) {
    const findClient = await this.findOne(_id);
    if (!findClient) throw new NotFound(_id);
    return clientRepository.delete(_id);
    
  }
}

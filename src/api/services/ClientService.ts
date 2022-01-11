import { Client } from "../../entities/Client";
import { ClientRepository } from "../repository/ClientRepository";


const clientRepository = new ClientRepository

export class ClientService {
  async create(payload): Promise<Client | Error> {
    return await clientRepository.create(payload);   
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
    return await clientRepository.update(_id, payload);   
   }
   async delete(_id) {
    return await clientRepository.delete(_id);
    
   }
}
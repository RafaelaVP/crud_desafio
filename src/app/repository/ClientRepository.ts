import { Client } from '../entities/Client';
import { BaseRepository } from './BaseRepository';

export class ClientRepository extends BaseRepository {
  constructor() {
    super(Client);
  }
  async findspecial(payload): Promise<any> {
    return await super.findOne(payload);   
 }
}

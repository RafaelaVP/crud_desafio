import { Client } from '../entities/Client';
import { BaseRepository } from './BaseRepository';

export class ClientRepository extends BaseRepository {
  constructor() {
    super(Client);
  }
}

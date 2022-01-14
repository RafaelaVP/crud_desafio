import { getRepository } from 'typeorm';

export class BaseRepository {
  private entity: any;

  constructor(entity: any) {
    this.entity = entity;
  }

  async create(payload): Promise<any | Error> {
    return getRepository(this.entity).save(payload);
  }

  async find(payload): Promise<any | Error> {
    const result = await getRepository(this.entity).findAndCount(payload);
    return result;
  }

  async findOne(_id): Promise<any | Error> {
    const result = await getRepository(this.entity).findOne(_id);
    return result;
  }

  async update(_id, payload) {
    return getRepository(this.entity).update(_id, payload);
  }

  async delete(_id) {
    return getRepository(this.entity).delete(_id);
  }
}

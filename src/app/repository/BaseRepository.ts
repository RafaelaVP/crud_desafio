import { getConnection } from 'typeorm';

export class BaseRepository {
  private entity: any;

  constructor(entity: any) {
    this.entity = entity;
  }

  async create(payload): Promise<any | Error> {
    return getConnection(process.env.NODE_ENV).getRepository(this.entity).save(payload);
  }

  async find(payload): Promise<any | Error> {
    const result = await getConnection(process.env.NODE_ENV).getRepository(this.entity).findAndCount(payload);
    return result;
  }

  async findOne(_id: string): Promise<any | Error> {
    const result = await getConnection(process.env.NODE_ENV).getRepository(this.entity).findOne(_id);
    return result;
  }

  async update(_id: string, payload) {
    return getConnection(process.env.NODE_ENV).getRepository(this.entity).update(_id, payload);
  }

  async delete(_id: string) {
    return getConnection(process.env.NODE_ENV).getRepository(this.entity).delete(_id);
  }

  async findByCity(city: string): Promise<any | Error> {
    const result = await getConnection(process.env.NODE_ENV).getRepository(this.entity).findOne(city);
    return result;
  }

  async findByState(state: string): Promise<any | Error> {
    const result = await getConnection(process.env.NODE_ENV).getRepository(this.entity).findOne(state);
    return result;
  }

  async findByNameClient(name: string): Promise<any | Error> {
    const result = await getConnection(process.env.NODE_ENV).getRepository(this.entity).findOne(name);
    return result;
  }

  async updateName(_id: string, name: string) {
    return getConnection(process.env.NODE_ENV).getRepository(this.entity).update(_id, name);
  }
}

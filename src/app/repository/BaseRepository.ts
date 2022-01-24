import { getConnection } from 'typeorm';

export class BaseRepository {
  private entity: any;

  constructor(entity: any) {
    this.entity = entity;
  }

  async create(payload): Promise<any | Error> {
    return getConnection(process.env.NODE_ENV).getRepository(this.entity).save(payload);
  }

  async findAll({ page = 1, limit = 100, relations, ...payload }): Promise<any> {
    const filter = {
      where: payload,
      take: limit,
      ...(relations && { relations: [relations] })
    };
    const [docs, count] = await getConnection(process.env.NODE_ENV).getRepository(this.entity).findAndCount(filter);
    return { docs, total: count, limit, offset: page };
  }

  async findOne(_id): Promise<any | Error> {
    const result = await getConnection(process.env.NODE_ENV).getRepository(this.entity).findOne(_id);
    return result;
  }

  async update(_id: string, payload) {
    return getConnection(process.env.NODE_ENV).getRepository(this.entity).update(_id, payload);
  }

  async delete(_id: string) {
    return getConnection(process.env.NODE_ENV).getRepository(this.entity).delete(_id);
  }
}

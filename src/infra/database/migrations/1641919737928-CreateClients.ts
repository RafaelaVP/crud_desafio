import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { enumClient } from '../../../app/utils/enumClient';

export class CreateClients1641919737928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'gender',
            type: 'varchar',
            enum: Object.keys(enumClient)
          },
          {
            name: 'city_home',
            type: 'uuid'
          },
          {
            name: 'birthdate',
            type: 'varchar'
          }
        ],
        foreignKeys: [
          {
            name: 'fk_clients_city',
            columnNames: ['city_home'],
            referencedTableName: 'cities',
            referencedColumnNames: ['id']
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}

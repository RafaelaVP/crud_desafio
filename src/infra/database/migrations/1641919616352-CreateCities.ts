import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { enumState } from '../../../app/utils/enumState';


export class CreateCities1641919616352 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'cities',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'city',
            type: 'varchar'
          },
          {
            name: 'state',
            type: 'varchar',
            enum: Object.keys(enumState)
            
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cities');
  }
}

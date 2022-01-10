import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCities1641775733872 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cities",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"city",
                        type:"varchar",
                        
                    },
                    {
                        name: "state",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
 
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cities")
    }
}

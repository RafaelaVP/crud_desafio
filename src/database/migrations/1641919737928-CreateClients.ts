import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1641919737928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated:true
                    },
                    {
                        name:"name",
                        type:"varchar",
                        
                    },
                    {
                        name: "gender",
                        type:"varchar"
                    },
                    {
                        name: "city",
                        type:"varchar"
                    },
                    {
                        name:"birthdate",
                        type:"date"
                    },
                    {
                        name:"age",
                        type:"numeric"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients")
    }

}

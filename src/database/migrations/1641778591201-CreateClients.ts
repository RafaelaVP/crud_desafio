import {Generated, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1641778591201 implements MigrationInterface {

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
                        name: "city_id",
                        type:"int"
                    },
                    {
                        name:"birthdate",
                        type:"numeric"
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
                foreignKeys: [
                    {
                        name: "fk_clients_category",
                        columnNames: ["city_id"],
                        referencedTableName: "cities",
                        referencedColumnNames:["id"]
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clients")

    }

}

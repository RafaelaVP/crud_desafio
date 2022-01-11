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
                        name: "city_home",
                        type:"int"
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
              foreignKeys: [
                {
                    name: "fk_clients_city",
                    columnNames: ["city_home"],
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

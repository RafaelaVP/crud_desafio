import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { v4 as uuid} from "uuid"
import { City } from "./City";
@Entity("clients")
export class Client {
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    gender: string;

    @Column()
    city_id: string;

    @ManyToOne(()=> City)
    @JoinColumn({name:"city_id"})
    city: City

    @Column()
    birthdate: Date

    @Column()
    age: number

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
           this.id = uuid()
        }
    }
}

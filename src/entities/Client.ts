import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"
import { City } from "./City";


export type genderType = "female"| "male" | "other"

@Entity("clients")
export class Client {
    @PrimaryColumn()
    id: number;
    
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
}

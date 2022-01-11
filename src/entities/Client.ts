import {Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm"

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
    city: string;

    @Column()
    birthdate: Date;

    @Column()
    age: number;

    @CreateDateColumn()
    created_at: Date;
}

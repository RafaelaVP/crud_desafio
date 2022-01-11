import {Entity, Column, CreateDateColumn, PrimaryColumn, PrimaryGeneratedColumn, Generated } from "typeorm"

@Entity("cities")
export class City {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    city: string;
    
    @Column()
    state: string;

    @CreateDateColumn()
    created_at: Date;
   
}

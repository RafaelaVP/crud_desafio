import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { randomUUID } from 'crypto';
import { City } from './City';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  city_home: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_home' })
  city: City;

  @Column()
  birthdate: string;

  constructor() {
    this.id = randomUUID();
  }
}

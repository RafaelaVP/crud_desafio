import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city: string;

  @Column()
  state: string;

  constructor() {
    this.id = randomUUID();
  }
}

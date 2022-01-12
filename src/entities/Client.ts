import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { City } from './City';

@Entity('clients')
export class Client {
  @PrimaryColumn()
  id: number;

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
  birthdate: Date;

  @Column()
  age: number;

  @CreateDateColumn()
  created_at: Date;
}

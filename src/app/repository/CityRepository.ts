import { City } from '../entities/City';
import { BaseRepository } from './BaseRepository';

export class CityRepository extends BaseRepository {
  constructor() {
    super(City);
  }
}

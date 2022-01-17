export class CityRequest {
  constructor() {
    this.city = undefined;
    this.state = undefined;
    this.page = undefined;
    this.limit = undefined;
  }

  city: string;

  state: string;

  page: number;

  limit: number;
}

export class CityNotFound extends Error {
  constructor(_id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The ID city: ${_id} was not found`;
  }
}

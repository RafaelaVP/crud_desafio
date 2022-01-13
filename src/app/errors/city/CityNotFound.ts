export class CitytIdNotFound extends Error {
  constructor(_id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The client ID: ${_id} was not found`;
  }
}

export class ClientNotFound extends Error {
  constructor(_id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The ID client: ${_id} was not found`;
  }
}

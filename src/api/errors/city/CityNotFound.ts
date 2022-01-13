export class CitytIdNotFound extends Error {
  constructor(error, status) {
    super(error);
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The client ID: ${status} was not found`;
  }
}

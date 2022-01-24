export class NotFound extends Error {
  statusCode: number;

  description: string;

  constructor(id) {
    super();
    this.statusCode = 404;
    this.description = 'Not found';
    this.message = `The ID: ${id} was not found`;
  }
}

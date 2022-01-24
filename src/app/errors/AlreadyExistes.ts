export class AlreadyExists extends Error {
  description: string;

  constructor() {
    super();
    this.description = 'Bad request';
    this.message = ` Already Exists`;
  }
}

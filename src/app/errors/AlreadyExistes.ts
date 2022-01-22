export class AlreadyExists extends Error {
  
    description: string;
  
    constructor(alreadyexists: string ) {
      super();
      this.description = 'Bad request';
      this.message = ` Already Exists`;
    }
  }
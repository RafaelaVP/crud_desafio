import { createConnection } from 'typeorm';

export function connection() {

    return createConnection(process.env.NODE_ENV);
  
  }

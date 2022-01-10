import "reflect-metadata"
import express from "express"

class App {
    public server: express.Application
    constructor() {
      this.server = express();     
      
    }
}

export = new App().server;
import { Request, Response } from 'express';
import { ClientService } from '../services/ClientService';

const clientService = new ClientService();

export class ClientController {
  async create(request: Request, response: Response) {
    try {
      const result = await clientService.create(request.body);
      return response.status(201).json(result);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const result = await clientService.findAll(request.query);
      return response.status(200).json(result);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const result = await clientService.findOne(request.params);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(error).json({ description: error.description, name: error.message });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const payload = request.body;
      await clientService.update(id, payload);
      return response.status(204).end();
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      await clientService.delete(request.params);
      return response.status(204).end();
    } catch (err) {
      return response.status(404).json(err);
    }
  }
}
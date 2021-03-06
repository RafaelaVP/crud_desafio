import { Request, Response } from 'express';
import { paginatedSerialize } from '../serialize/clientSerialize';
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
      return response.status(200).json(paginatedSerialize(result));
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const result = await clientService.findOne(request.params.id);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const payload = request.body;
      await clientService.update(id, payload);
      return response.status(200).json(payload);
    } catch (err) {
      return response.status(400).json({ message: 'error trying to update with city id.' });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      await clientService.delete(request.params);
      return response.status(204).json({});
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

import { Request, Response } from 'express';
import { paginatedSerialize } from '../serialize/citySerialize';

import { CityService } from '../services/CityService';

const cityService = new CityService();

export class CityController {
  async create(request: Request, response: Response) {
    try {
      const result = await cityService.create(request.body);
      return response.status(201).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const result = await cityService.findAll(request.query);
      return response.status(200).json(paginatedSerialize(result));
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const result = await cityService.findOne(request.params);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const payload = request.body;
      await cityService.update(id, payload);
      return response.status(200).json(payload);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      await cityService.delete(request.params.id);
      return response.status(204).json({});
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

import Joi from 'joi';
import { enumState } from '../../utils/enumState';

export = async (req, res, next) => {
  try {
    const cities = Joi.object({
      city: Joi.string().trim().optional(),
      state: Joi.string()
        .trim()
        .optional()
        .valid(...Object.values(enumState))
    });

    const { error } = await cities.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        description: detail.message,

        name: detail.path.join('.')
      }))
    );
  }
};

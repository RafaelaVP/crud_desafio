import Joi from 'joi';
import Extension from '@joi/date';
import { enumClient } from '../../utils/enumClient';

const JoiDate = Joi.extend(Extension);
export = async (req, res, next) => {
  try {
    const client = Joi.object({
      name: Joi.string().min(2).max(30).required(),
      gender: Joi.string()
        .trim()
        .valid(...Object.keys(enumClient))
        .required(),
      city_home: Joi.string(),
      birthdate: JoiDate.date().format('DD/MM/YYYY').less(Date.now())
    });

    const { error } = await client.validate(req.body, { abortEarly: false });
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

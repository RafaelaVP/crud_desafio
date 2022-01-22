import Joi from 'joi';
import { enumState } from '../../utils/enumState';


export = async (req, res, next) => {
  try {
    const city = Joi.object({
      city: Joi.string().trim().required(),
      state: Joi.string()
        .trim()
        .required()
        .valid(...Object.keys(enumState))
    });

    const { error } = await city.validate(req.body, { abortEarly: false });
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

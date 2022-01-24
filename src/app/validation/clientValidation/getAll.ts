import Joi from 'joi';
import Extension from '@joi/date';

const JoiDate = Joi.extend(Extension);

export = async (req, res, next) => {
  try {
    const client = Joi.object({
      name: Joi.string().min(2).max(30),
      gender: Joi.string().trim(),
      city_home: Joi.string().uuid(),
      birthdate: JoiDate.string()
    });

    const { error } = client.validate(req.body, { abortEarly: false });
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

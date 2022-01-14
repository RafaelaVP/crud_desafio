import Joi from 'joi';

export = async (req, res, next) => {
  try {
    const client = Joi.object({
      name: Joi.string().min(2).max(30),
      gender: Joi.string().min(2).max(30),
      city_home: Joi.string().min(2).max(30),
      birthdate: Joi.date(),
      age: Joi.number()
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
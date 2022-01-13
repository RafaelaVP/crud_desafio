import Joi from 'joi';

export = async (req, res, next) => {
  try {
    const city = Joi.object({
      name: Joi.string().min(2).max(30).required(),
      gender: Joi.string().min(2).max(30).required(),
      city_home: Joi.string().min(2).max(30).required(),
      birthdate: Joi.date(),
      age: Joi.number()
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

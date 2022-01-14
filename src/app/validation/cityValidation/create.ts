import Joi from 'joi';

export = async (req, res, next) => {
  try {
    const city = Joi.object({
      city: Joi.string().min(2).max(30).required(),
      state: Joi.string().min(2).max(30).required()
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

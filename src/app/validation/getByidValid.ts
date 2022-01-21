import Joi from 'joi';

export = async (req, res, next) => {
  try {
    const entities = Joi.object({
      id: Joi.string().min(24)
    });

    const { error } = await entities.validate(req.params, { abortEarly: false });
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

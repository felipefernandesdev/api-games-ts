import { Joi, Segments } from 'celebrate';

const registerValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    releaseData: Joi.string().required(),
    designer: Joi.string().required(),
    developer: Joi.string().required(),
    genre: Joi.string().required(),
    mode: Joi.string().required(),
    platform: Joi.string().required()
  })
};

export { registerValidator };

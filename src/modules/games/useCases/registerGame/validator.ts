import { Joi, Segments } from 'celebrate';

import { customMessage } from '../../../../utils/errors';

const registerValidator = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().messages(customMessage('name')),
    releaseData: Joi.string().required().messages(customMessage('releaseData')),
    designer: Joi.string().required().messages(customMessage('designer')),
    developer: Joi.string().required().messages(customMessage('developer')),
    genre: Joi.string().required().messages(customMessage('genre')),
    mode: Joi.string().required().messages(customMessage('mode')),
    platform: Joi.string().required().messages(customMessage('platform'))
  })
};

export { registerValidator };

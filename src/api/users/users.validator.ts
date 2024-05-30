import { Joi } from 'celebrate';

const phoneNumberRegx = /^2507[2389]\d{7}/;

export const signup = Joi.object().keys({
  first_name: Joi.string().label('First Name').required(),
  last_name: Joi.string().label('Last Name').required(),
  email: Joi.string().label('Email').required().email(),
  phone_number: Joi.string().label('Phone Number').required().regex(phoneNumberRegx),
  password: Joi.string().required().trim().max(60),
});


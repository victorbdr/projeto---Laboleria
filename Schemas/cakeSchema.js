import joi from "joi";

const cakeValidation = joi.object({
  name: joi.string().min(2).required(),
  price: joi.number().integer().required(),
  image: joi.string().uri().required(),
  description: joi.string().allow(null).allow("").required(),
});

export { cakeValidation };

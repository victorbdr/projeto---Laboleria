import joi from "joi";

const cakeValidation = joi.object({
  name: joi.string().required(),
  price: joi.number().required().positive(),
  image: joi.string().required(),
  description: joi.string().required(),
});

export { cakeValidation };

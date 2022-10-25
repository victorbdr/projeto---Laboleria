import joi from "joi";

const orderValidation = joi.object({
  clientId: joi.number().integer().required(),
  cakeId: joi.number().integer().required(),
  quantity: joi.number().integer().required(),
  totalPrice: joi.number().required(),
});

export { orderValidation };

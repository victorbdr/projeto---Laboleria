import joi from "joi";

const orderValidation = joi.object({
  clientId: joi.number().integer().required(),
  cakeId: joi.number().integer().required(),
  quantity: joi.number().integer().min(1).max(5).positive().required(),
  totalPrice: joi.number().required(),
});

export { orderValidation };

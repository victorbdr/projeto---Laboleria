import joi from "joi";

const orderValidation = joi.object({
  quantity: joi.number(5).positive().required(),
});

export { orderValidation };

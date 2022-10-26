import joi from "joi";

const clientValidation = joi.object({
  name: joi.string().required(),
  address: joi.string().required(),
  phone: joi.string().min(10).max(11).required(),
});

export { clientValidation };

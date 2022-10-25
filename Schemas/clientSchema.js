import joi from "joi";

const clientValidation = joi.object({
  name: joi.string().required(),
  address: joi.string().required(),
  phone: joi.string().required(),
});

export { clientValidation };

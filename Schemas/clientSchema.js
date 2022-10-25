import joi from "joi";

const clientValidation = joi.object({
  name: joi.string().required(),
  adress: joi.string().required(),
  phone: joi.number().required(),
});

export { clientValidation };

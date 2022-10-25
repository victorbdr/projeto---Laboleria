import { clientValidation } from "../Schemas/clientSchema.js";

async function validClient(req, res, next) {
  const { name, adress, phone } = req.body;

  const validClient = clientValidation.validate({
    name,
    adress,
    phone,
  });
  if (validClient.error) {
    return res.sendStatus(400);
  }
  next();
}
export { validClient };

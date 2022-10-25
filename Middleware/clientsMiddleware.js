import { clientValidation } from "../Schemas/clientSchema.js";

async function validClient(req, res, next) {
  const { name, address, phone } = req.body;

  const validClient = clientValidation.validate({
    name,
    address,
    phone,
  });
  if (validClient.error) {
    return res.sendStatus(400);
  }
  next();
}
export { validClient };

import { orderValidation } from "../Schemas/orderSchema.js";

async function validationOrder(req, res, next) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;

  const validOrder = orderValidation.validate({
    clientId,
    cakeId,
    quantity,
    totalPrice,
  });
  if (validOrder.error) {
    return res.sendStatus(400);
  }
  next();
}
export { validationOrder };

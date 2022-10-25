import { orderValidation } from "../Schemas/orderSchema.js";

async function validOrder(req, res, next) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;

  const validOrder = orderValidation.validate({
    quantity,
  });
  if (validOrder.error) {
    return res.sendStatus(400);
  }
  next();
}
export { validOrder };

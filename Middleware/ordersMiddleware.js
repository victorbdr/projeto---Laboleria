import db from "../db/db.js";
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
  try {
    const searchClientId = await db.query(
      `SELECT "clientId" FROM orders WHERE id = $1`,
      [clientId]
    );
    if (!searchClientId) {
      return res.sendStatus(404);
    }
    const seachCakeId = await db.query(
      `SELECT "cakeId" FROM orders WHERE id = $1`,
      [cakeId]
    );
    if (!seachCakeId) {
      return res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  next();
}
export { validationOrder };

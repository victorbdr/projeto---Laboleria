import db from "../db/db.js";
import { cakeValidation } from "../Schemas/cakeSchema.js";

async function validCake(req, res, next) {
  const { name, price, image, description } = req.body;

  const validCake = cakeValidation.validate({
    name,
    price,
    image,
    description,
  });
  if (validCake.error) {
    return res.sendStatus(400);
  }
  try {
    const searchName = await db.query(`SELECT name FROM cakes WHERE name=$1`, [
      name,
    ]);
    if (!searchName) {
      return res.sendStatus(409);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
  next();
}

export { validCake };

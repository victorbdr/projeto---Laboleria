import db from "../db/db.js";

async function orderByClient(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;
  try {
    await db.query(
      `INSERT into orders(clientId, cakeId, quantity, totalPrice) VALUES($1, $2, $3, $4)`,
      [clientId, cakeId, quantity, totalPrice]
    );
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

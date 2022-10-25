import db from "../db/db.js";

async function newCake(req, res) {
  const { name, price, image, description } = req.body;
  try {
    await db.query(
      `INSERT into cakes(name, price, image, description) VALUES ($1,$2,$3,$4)`,
      [name, price, image, description]
    );
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { newCake };

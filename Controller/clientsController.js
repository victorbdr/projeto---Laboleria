import db from "../db/db.js";

async function myClients(req, res) {
  const { name, address, phone } = req.body;
  try {
    await db.query(
      `INSERT into clients(name, address, phone) VALUES($1,$2,$3)`,
      [name, address, phone]
    );
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { myClients };

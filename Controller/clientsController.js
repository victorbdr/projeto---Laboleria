import db from "../db/db.js";

async function myClients(req, res) {
  const { name, adress, phone } = req.body;
  try {
    await db.query(
      `INSERT into clients(name, adress, phone) VALUES($1,$2,$3)`,
      [name, adress, phone]
    );
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function clientOrders(req, res) {
  const { id } = req.params;

  try {
    const { rows: clientData } = await db.query(
      `SELECT orders.id AS "ordersId", orders."createdAt", orders.quantity, orders."totalPrice",
    cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image,
    clients.id AS "clientId", clients.name AS "clientName", clients.adress, clients.phone FROM orders
    JOIN clients ON "clientId" = clients.id
    JOIN cakes ON "cakeId" = cakes.id
    WHERE clients.id = $1`,
      [id]
    );
    const clientInfo = clientData.map((data) => {
      const info = {
        client: {
          id: data.clientId,
          name: data.clientName,
          address: data.adress,
          phone: data.phone,
        },
        cake: {
          id: data.cakeId,
          name: data.cakeName,
          price: data.price,
          description: data.description,
          image: data.image,
        },
        orderId: data.ordersId,
        createdAt: data.createdAt,
        quantity: data.quantity,
        totalPrice: data.totalPrice,
      };
      return info;
    });
    res.send(clientInfo).status(200);
    return;
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
export { myClients, clientOrders };

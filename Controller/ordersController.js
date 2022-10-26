import db from "../db/db.js";
import dayjs from "dayjs";

async function orderByClient(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;
  try {
    await db.query(
      `INSERT into orders ( "clientId", "cakeId", quantity, "totalPrice") VALUES($1, $2, $3, $4)`,
      [clientId, cakeId, quantity, totalPrice]
    );
    return res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function getOrdersByDate(req, res) {
  const { date } = req.query;
  if (date) {
    try {
      const withDate = await db.query(
        `SELECT orders.id AS "ordersId", orders."createdAt", orders.quantity, orders."totalPrice",
        cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image,
        clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone FROM orders
        JOIN clients ON "clientId" = clients.id
        JOIN cakes ON "cakeId" = cakes.id
        WHERE orders."createdAt"::date = $1`,
        [`${date}`]
      );

      if (withDate.rowCount === 0) {
        return res.status(404).send([]);
      }

      const allInfo = withDate.rows.map((data) => {
        const info = {
          client: {
            id: data.clientId,
            name: data.clientName,
            address: data.address,
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
      res.send(allInfo);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  } else {
    try {
      const noDate = await db.query(
        `SELECT orders.id AS "ordersId", orders."createdAt", orders.quantity, orders."totalPrice",
      cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image,
      clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone FROM orders
      JOIN clients ON "clientId" = clients.id
      JOIN cakes ON "cakeId" = cakes.id`
      );
      const allInfo = noDate.rows.map((data) => {
        const info = {
          client: {
            id: data.clientId,
            name: data.clientName,
            address: data.address,
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
      return res.send(allInfo).status(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
}

async function orderById(req, res) {
  const { id } = req.params;
  try {
    const paramsCheck = await db.query(`SELECT * FROM orders WHERE id=$1`, [
      id,
    ]);
    if (paramsCheck.rowCount === 0) {
      return res.sendStatus(404);
    }
    const byId = await db.query(
      `SELECT orders.id AS "ordersId", orders."createdAt", orders.quantity, orders."totalPrice",
cakes.id AS "cakeId", cakes.name AS "cakeName", cakes.price, cakes.description, cakes.image,
clients.id AS "clientId", clients.name AS "clientName", clients.address, clients.phone FROM orders
JOIN clients ON "clientId" = clients.id
JOIN cakes ON "cakeId" = cakes.id
WHERE orders.id = $1`,
      [id]
    );

    const clientInfo = byId.rows.map((data) => {
      const info = {
        client: {
          id: data.clientId,
          name: data.clientName,
          address: data.address,
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
export { orderByClient, getOrdersByDate, orderById };

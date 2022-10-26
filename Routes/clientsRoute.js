import { Router } from "express";
import { myClients } from "../Controller/clientsController.js";
import { validClient } from "../Middleware/clientsMiddleware.js";
import { clientOrders } from "../Controller/clientsController.js";

const clientRoute = Router();

clientRoute.post("/clients", validClient, myClients);
clientRoute.get("/clients/:id/orders", clientOrders);

export default clientRoute;

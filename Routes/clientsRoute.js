import { Router } from "express";
import { myClients } from "../Controller/clientsController.js";
import { validClient } from "../Middleware/clientsMiddleware.js";

const clientRoute = Router();

clientRoute.post("/clients", validClient, myClients);

export default clientRoute;

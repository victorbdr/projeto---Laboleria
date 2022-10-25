import { Router } from "express";
import { orderByClient } from "../Controller/ordersController.js";
import { validationOrder } from "../Middleware/ordersMiddleware.js";

const orderRoute = Router();

orderRoute.post("/order", validationOrder, orderByClient);

export default orderRoute;

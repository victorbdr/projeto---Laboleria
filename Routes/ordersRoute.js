import { Router } from "express";
import {
  orderByClient,
  getOrdersByDate,
  orderById,
} from "../Controller/ordersController.js";
import { validationOrder } from "../Middleware/ordersMiddleware.js";

const orderRoute = Router();

orderRoute.post("/order", validationOrder, orderByClient);
orderRoute.get("/orders", getOrdersByDate);
orderRoute.get("/orders/:id", orderById);
export default orderRoute;

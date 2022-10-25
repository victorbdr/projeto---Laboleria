import { Router } from "express";
import { newCake } from "../Controller/cakesController.js";
import { validCake } from "../Middleware/cakesMiddleware.js";

const cakeRouter = Router();

cakeRouter.post("/cakes", validCake, newCake);

export default cakeRouter;

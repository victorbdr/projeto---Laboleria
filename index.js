import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cakeRouter from "./Routes/cakeRoute.js";
import clientRoute from "./Routes/clientsRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use(cakeRouter);
app.use(clientRoute);

app.listen(process.env.PORT, () =>
  console.log(`server working on port ${process.env.PORT}`)
);

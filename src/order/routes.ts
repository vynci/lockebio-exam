import { Express } from "express";
import * as bodyParser from "body-parser";

import { create, list } from "./controller";

export const orderRoutes = (app: Express) => {
  app.post("/order", bodyParser.json(), create);
  app.get("/orders", list);
};

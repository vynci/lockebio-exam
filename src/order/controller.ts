import { Request, Response } from "express";
import { createOrder, listOrder } from "./service";

export const create = async (req: Request, res: Response) => {
  try {
    res.json(await createOrder(req));
  } catch (error) {
    res.status(404).send({
      message: error,
    });
  }
};

export const list = (req: Request, res: Response) => {
  try {
    res.json(listOrder());
  } catch (error) {
    res.status(404).send({
      message: error,
    });
  }
};

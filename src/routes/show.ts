import express, { NextFunction, Request, Response } from "express";
import { Ticket } from "../models/ticket";
import { NotFoundError } from "@raipackages/common";

const router = express.Router();

router.get(
  "/api/tickets/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return next(new NotFoundError());
    }
    res.send({ tickets: ticket });
  }
);

export { router as showTicketRouter };

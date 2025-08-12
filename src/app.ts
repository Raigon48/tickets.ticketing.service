import express from "express";
import { json } from "body-parser";

import { currentUser, errorHandler } from "@raipackages/common";
import { NotFoundError } from "@raipackages/common";

import cookieSession from "cookie-session";
import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from "./routes/show";
import { getTicketsRouter } from "./routes";
import { updateTicketsRouter } from "./routes/update";

const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUser);

app.use(getTicketsRouter);
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(updateTicketsRouter);

app.use((req, res, next) => {
  next(new NotFoundError());
});

app.use(errorHandler);

export { app };

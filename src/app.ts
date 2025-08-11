import express from "express";
import { json } from "body-parser";

import { errorHandler } from "@raipackages/common";
import { NotFoundError } from "@raipackages/common";

import cookieSession from "cookie-session";

const app = express();

app.set("trust proxy", true);

app.use(json());

app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use((req, res, next) => {
  next(new NotFoundError());
});

app.use(errorHandler);

export { app };

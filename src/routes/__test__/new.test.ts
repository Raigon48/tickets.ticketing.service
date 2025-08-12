import request from "supertest";
import { app } from "../../app";

it("has a router handler listening to /api/tickets from post requests", async () => {
  const response = await request(app).post("/api/tickets").send({});

  expect(response.statusCode).not.toEqual(404);
});

it("return statusCode other than 401 when the user is signed in.", async () => {});

it("creates a tickets with valid parameter", async () => {});

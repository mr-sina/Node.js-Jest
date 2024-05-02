import { request } from "supertest";
import app from "../../../main";
import express, { Router } from "express";

const router: Router = express.Router();

describe("update a task", () => {
  let router: Router;
  beforeEach(() => {
     express.Router();
  });
  it("should return all posts", async () => {
    const res = await request(app)
      .get("/user/user")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });

    // expect(res.body).toBeInstanceOf(Array);
  });
});

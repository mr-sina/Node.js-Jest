import express, { Router } from "express";
import { user, users } from "./user.controller";

const router : Router = express.Router();

router.get("/user", user);

router.get("/users", users);

export default router;

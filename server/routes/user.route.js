import express from "express";
const userRouter = express.Router();

import { userRegister } from "../controllers/user.controller.js";

userRouter.post("/register", userRegister);

export default userRouter;

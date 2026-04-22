import express from "express";
const userRouter = express.Router();

import { userLogin, userRegister } from "../controllers/user.controller.js";

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

export default userRouter;

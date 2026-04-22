import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { UserModel } from "../models/user.model.js";

const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await UserModel.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const normaliedEmail = email.toLowerCase();
    const hashed = await bcrypt.hash(password, 10);
    const userData = await UserModel.create({
      username,
      email: normaliedEmail,
      password: hashed,
    });
    return res.status(201).json({
      message: "A new user created successfully",
      userData: {
        id: userData.id,
        username: userData.username,
        email: userData.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });
    const user = await UserModel.findOne({ where: { email: email } });
    if (!user) return res.status(400).json({ message: "Invalid credentials!" });
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid credentials!" });
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRES_IN },
    );
    return res
      .status(200)
      .json({ accesstoken: token, message: "You are successfully logged in!" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
    console.error(error);
  }
};
export const me = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { id: req.id },
      attributes: ["username"],
    });
    console.log(user);
    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", cm: error.message });
  }
};
export { userRegister, userLogin };

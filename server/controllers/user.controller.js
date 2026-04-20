import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";

const userRegister = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await UserModel.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      username,
      email,
      password: hashed,
    });
    return res
      .status(201)
      .json({ message: "A new user created successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export { userRegister };

import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/dbConfig.js";
import { UserModel } from "./models/user.model.js";
import userRouter from "./routes/user.route.js";

dotenv.config();
const PORT = process.env.PORT || 5500;

const app = express();
app.use(express.json());
app.use("/api", userRouter);

// DB connection
const dBConnection = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("DB Connection has been successfully extablished.");
  } catch (error) {
    console.error("Unable to connect to the DB", error);
  }
};
dBConnection();

// server and api test
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running at http://192.168.88.234:${PORT}`);
});

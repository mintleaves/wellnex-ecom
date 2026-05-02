import express from "express";
import {
  createCategory,
  getAllCategory,
} from "../controllers/category.controller.js";
const categoryRouter = express.Router();

categoryRouter.post("/add-category", createCategory);
categoryRouter.get("/get-all-category", getAllCategory);
export default categoryRouter;

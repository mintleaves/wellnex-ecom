import express from "express";
import {
  addProduct,
  getAllProducts,
} from "../controllers/product.controller.js";
const productRouter = express.Router();

productRouter.post("/add-product", addProduct);
productRouter.get("/get-all-products", getAllProducts);
export default productRouter;

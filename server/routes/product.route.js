import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
const productRouter = express.Router();

productRouter.post("/add-product", addProduct);
productRouter.get("/get-all-products", getAllProducts);
productRouter.get("/get-product/:id", getProduct);
productRouter.put("/update-product/:id", updateProduct);
productRouter.delete("/delete-product/:id", deleteProduct);
export default productRouter;

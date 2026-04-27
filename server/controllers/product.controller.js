import { ProductModel } from "../models/product.model.js";
import errorHandler from "../middlewares/errorHandler.middleware.js";
const addProduct = async (req, res, next) => {
  try {
    const { name, price, image, description } = req.body;
    if (!name || !price) {
      const err = new Error("Name and price is required");
      err.statusCode = 401;
      return next(err);
    }
    const product = await ProductModel.create({
      name: name,
      price: price,
      image: image,
      description: description,
    });
    return res.status(200).json({
      success: true,
      message: "A new product has been added",
      product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductModel.findAll({
      order: [["id", "DESC"]],
    });
    if (!products) {
      const err = new Error("No product found");
      err.statusCode = 401;
      return next(err);
    }
    return res.status(200).json({
      success: true,
      message: "All Product list: ",
      products,
    });
  } catch (error) {
    next(error);
  }
};

export { addProduct, getAllProducts };

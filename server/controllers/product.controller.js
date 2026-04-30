import { ProductModel } from "../models/product.model.js";
const addProduct = async (req, res, next) => {
  try {
    const { name, price, image, description } = req.body;
    if (!name || !price) {
      const err = new Error("Name and price is required");
      err.statusCode = 400;
      return next(err);
    }
    const product = await ProductModel.create({
      name: name,
      price: price,
      image: image,
      description: description,
    });
    return res.status(201).json({
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
    return res.status(200).json({
      success: true,
      message: "All Product list: ",
      products,
    });
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findByPk(id);
    if (!product) {
      const err = new Error("Product not found!");
      err.statusCode = 404;
      return next(err);
    }
    return res.status(200).json({
      success: true,
      message: "Product: ",
      product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name, price, image, description } = req.body;
    const product = await ProductModel.findByPk(id);
    if (!product) {
      const err = new Error("Product not found!");
      err.statusCode = 404;
      return next(err);
    }
    await product.update({
      name: name || product.name,
      price: price || product.price,
      image: image || product.image,
      description: description || product.description,
    });
    return res.status(201).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findByPk(id);
    if (!product) {
      const err = new Error("Product not found!");
      err.statusCode = 404;
      return next(err);
    }
    await product.destroy();
    return res.status(201).json({
      success: true,
      message: "A product deleted successfuly",
    });
  } catch (error) {
    next(error);
  }
};

export { addProduct, getAllProducts, getProduct, updateProduct, deleteProduct };

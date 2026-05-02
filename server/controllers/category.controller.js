import { CategoryModel } from "../models/category.model.js";

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      const err = new Error("Category name is required");
      err.statusCode = 400;
      return next(err);
    }
    const category = await CategoryModel.create({
      name: name,
    });
    return res.status(201).json({
      success: true,
      message: "A new category has been created",
      category,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCategory = async (req, res, next) => {
  try {
    const category = await CategoryModel.findAll({
      order: [["id", "DESC"]],
    });
    return res.status(200).json({
      success: true,
      message: "All Categories:",
      category,
    });
  } catch (error) {
    next(error);
  }
};
export { createCategory, getAllCategory };

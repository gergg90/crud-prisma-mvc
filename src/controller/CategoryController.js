import { CategoryModel } from "../models/CategoryModel.js";
import {
  validateCategory,
  validatePartialCategory,
} from "../schema/categorySchema.js";

export class CategoryController {
  static findAll = async (req, res) => {
    const categorys = await CategoryModel.findAll();
    return res.status(200).json(categorys);
  };

  static findById = async (req, res) => {
    const { id } = req.params;
    const product = await CategoryModel.findById(id);

    return res.status(200).json(product);
  };

  static create = async (req, res) => {
    const result = validateCategory(req.body);

    if (!result.success)
      return res.status(400).json({ error: JSON.parse(result.error.message) });

    const newCategory = await CategoryModel.create(result.data);

    res.status(201).json(newCategory);
  };
}

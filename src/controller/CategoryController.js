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
    const category = await CategoryModel.findById(id);

    if (!category)
      return res.status(400).json({ message: "Category not found" });

    return res.status(200).json(category);
  };

  static create = async (req, res) => {
    const result = validateCategory(req.body);

    if (!result.success)
      return res.status(400).json({ error: JSON.parse(result.error.message) });

    const newCategory = await CategoryModel.create(result.data);

    res.status(201).json(newCategory);
  };

  static update = async (req, res) => {
    const result = validatePartialCategory(req.body);
    const { id } = req.params;

    if (!result.success)
      return res.status(400).json({ error: JSON.parse(result.error.message) });

    try {
      const updateCategory = await CategoryModel.update(id, result.data);
      console.log(updateCategory);
      res.status(200).json(updateCategory);
    } catch (e) {
      console.error(`Error::: --->> ${e}`);
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;
    const deleteCategory = await CategoryModel.delete(id);
    if (!deleteCategory)
      return res.status(400).json({ message: "Category not found" });

    res.status(204).json({ message: "Category eliminated." });
  };
}

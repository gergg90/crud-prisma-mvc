import {
  validatePartialProduct,
  validateProduct,
} from "../schema/productSchema.js";

import { ProductModel } from "../models/productModel.js";

export class ProductController {
  static findAll = async (req, res) => {
    const product = await ProductModel.findAll();

    res.status(200).json(product);
  };

  static findById = async (req, res) => {
    const { id } = req.params;

    const product = await ProductModel.findById(id);

    if (!product) return res.status(400).json({ message: "Product Not found" });

    res.status(200).json(product);
  };

  static create = async (req, res) => {
    const result = validateProduct(req.body);

    if (!result.success)
      return res
        .status(400)
        .json({ message: JSON.parse(result.error.message) });

    const newProduct = await ProductModel.create(result.data);

    res.status(201).json(newProduct);
  };

  static update = async (req, res) => {
    const result = validatePartialProduct(req.body);
    const { id } = req.params;

    if (!result.success)
      return res
        .status(400)
        .json({ message: JSON.parse(result.error.message) });

    try {
      const updateProduct = await ProductModel.update(id, result.data);
      console.log(updateProduct);
      res.status(200).json(updateProduct);
    } catch (e) {
      console.log(`Este es un error ${e}`);
    }
  };

  static delete = async (req, res) => {
    const { id } = req.params;

    const product = await ProductModel.delete(id);
    if (!product) return res.status(400).json({ message: "Product not found" });

    res.status(204).json(product);
  };
}

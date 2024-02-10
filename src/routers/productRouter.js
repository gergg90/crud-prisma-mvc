import { Router } from "express";
import { ProductModel } from "../models/productModel.js";
import { validateProduct } from "../schema/productSchema.js";

export const productRouter = Router();

productRouter.get("/", async (req, res) => {
  const product = await ProductModel.findAll();

  res.status(200).json(product);
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await ProductModel.findById(id);

  if (!product) return res.status(400).json({ message: "Product Not found" });

  res.status(200).json(product);
});

productRouter.post("/", async (req, res) => {
  const result = validateProduct(req.body);

  if (!result.success)
    return res.status(400).json({ message: JSON.parse(result.error.message) });

  res.status(201).json(result.data);
});

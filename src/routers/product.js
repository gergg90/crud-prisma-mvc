import { Router } from "express";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const products = require("../products.json");

export const productRouter = Router();

productRouter.get("/", (req, res) => {
  res.json(products);
});

productRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) return res.status(400).json({ message: "Product not find" });

  res.status(200).json(product);
});

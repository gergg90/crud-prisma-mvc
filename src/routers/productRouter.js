import { Router } from "express";
import { ProductController } from "../controller/ProductController.js";

export const productRouter = Router();

productRouter.get("/", ProductController.findAll);

productRouter.get("/:id", ProductController.findById);

productRouter.post("/", ProductController.create);

productRouter.patch("/:id", ProductController.update);

productRouter.delete("/:id", ProductController.delete);

import { Router } from "express";
import { CategoryController } from "../controller/CategoryController.js";

export const categoryRouter = Router();

categoryRouter.get("/", CategoryController.findAll);

categoryRouter.get("/:id", CategoryController.findById);

categoryRouter.post("/", CategoryController.create);

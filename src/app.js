import express, { json } from "express";
import { productRouter } from "./routers/productRouter.js";
import { corsMiddleware } from "./middleware/cors.js";
import { categoryRouter } from "./routers/categoryRouter.js";

const app = express();
app.use(corsMiddleware());

const PORT = process.env.PORT ?? 4321;
app.disable("x-powered-by");
app.use(json());
app.use("/products", productRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});

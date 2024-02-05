import express from "express";
import { productRouter } from "./routers/product.js";

const app = express();

const PORT = process.env.PORT ?? 3000;

app.disable("x-powered-by");
app.use(express.json());
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.json({ message: "Home" });
});

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});

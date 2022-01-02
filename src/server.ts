import express, { NextFunction } from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

import productRoutes from "./routes/productRoutes";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Mage!");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server runnig in ${process.env.NODE_ENV} mode on ${PORT}`)
);

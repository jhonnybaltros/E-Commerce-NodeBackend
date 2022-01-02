import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel";

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find({});

    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error(`Product not found`);
    }
  })
);

export default router;

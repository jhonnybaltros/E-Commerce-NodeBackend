import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel';

// @desc Fetch all products
// @route GET /api/products
// @access Public

const getProducts = asyncHandler(async (req: Request, res: Response) => {
	const products = await Product.find({});

	res.json(products);
});

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public

const getProductsById = asyncHandler(async (req: Request, res: Response) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404);
		throw new Error(`Product not found`);
	}
});

export { getProducts, getProductsById };

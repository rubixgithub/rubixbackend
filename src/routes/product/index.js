import express from "express";

import productController from "../../controllers/product";

const Product = express.Router();

Product.get("/", productController.getProduct);

Product.post("/", productController.createProduct);

Product.get("/:id", productController.getProductById);

Product.delete("/:id", productController.deleteProduct);

Product.put("/:id", productController.updateProductById);

export default Product;

import express from "express";

import productGroupController from "../../controllers/product_group";

const ProductGroup = express.Router();

ProductGroup.get("/", productGroupController.getProductGroup);

ProductGroup.post("/", productGroupController.createProductGroup);

ProductGroup.get("/:id", productGroupController.getProductGroupById);

ProductGroup.put("/:id", productGroupController.updateProductGroupById);

export default ProductGroup;

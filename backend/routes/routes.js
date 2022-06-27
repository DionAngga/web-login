// import express
import express from "express";
 
// import function from controller
import {signUpAccount ,loginAccount, showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/products', showProducts);
 
// Get Single Product
router.get('/products/:id', showProductById);
 
// Create New Product
router.post('/products', createProduct);
 
// Update Product
router.put('/products/:id', updateProduct);
 
// Delete Product
router.delete('/products/:id', deleteProduct);

router.post('/signin', loginAccount);

router.post('/signup', signUpAccount);
 
// export default router
export default router;
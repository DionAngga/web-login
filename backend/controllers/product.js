// Import function from Product Model
import { getProducts, getProductById, insertProduct, updateProductById, deleteProductById, login, signUp } from "../models/productModel.js";
 
// Get All Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        //ada perubahan code disini
        if (err){
            res.send(err);
            return;
        }
            res.json(results);
        
    });
}

export const loginAccount = (req, res) => {
    login(req.body.username, req.body.password, (err, results) => {
        if (err){
            res.send(err);
            return;
        }
            res.json(results);
    });
}

export const signUpAccount = (req, res) => {
    signUp(req.body.username, req.body.email, req.body.password, (err, results) => {
        if (err){
            res.send(err);
            return;
        }
            res.json(results);
    });
}
 
// Get Single Product 
export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Product
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
export const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
export const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
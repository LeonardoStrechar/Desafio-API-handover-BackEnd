/** @format */

const { Router } = require("express");

//* Middlewares
const { auth } = require("./middlewares/authMiddleware.js");

//* Controllers
const { register } = require("./controllers/userController.js");
const { login } = require("./controllers/authController.js");
const { indexProduct, showProduct, createProduct, updateProduct, deleteProduct } = require("./controllers/productController.js");
const { append } = require("express/lib/response");

//* Routes
const router = Router();

//* Auth
router.post("/register", register);
router.post("/login", login);

//* Products
router.get("/products", auth, indexProduct);
router.get("/products/:productId", auth, showProduct);
router.post("/products/", auth, createProduct);
router.put("/products/:productId", auth, updateProduct);
router.delete("/products/:productId", auth, deleteProduct);

module.exports = { router };

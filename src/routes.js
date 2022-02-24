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
router.get("/products", indexProduct, auth);
router.get("/products/:productId", showProduct, auth);
router.post("/products/", createProduct, auth);
router.put("/products/:productId", auth, updateProduct);
router.delete("/products/:productId", auth, deleteProduct);

module.exports = { router };

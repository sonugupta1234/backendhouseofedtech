const express = require("express");

const { auth } = require("../middleware/authmiddleware");
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/userController");

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/profile", auth, getProfile);

module.exports = userRoutes;

const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  getCurrentAdmin,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/me", authMiddleware, getCurrentAdmin);

module.exports = router;


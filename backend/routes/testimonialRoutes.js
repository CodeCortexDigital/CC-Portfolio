const express = require("express");
const {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");
const upload = require("../config/upload");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getTestimonials);
router.get("/:id", getTestimonial);

// Protected admin routes
router.post("/", authMiddleware, upload.single("image"), createTestimonial);
router.put("/:id", authMiddleware, upload.single("image"), updateTestimonial);
router.delete("/:id", authMiddleware, deleteTestimonial);

module.exports = router;


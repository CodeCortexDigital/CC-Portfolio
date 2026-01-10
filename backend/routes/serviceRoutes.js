const express = require("express");
const {
  createService,
  getServices,
  getService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");
const upload = require("../config/upload");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getServices);
router.get("/:id", getService);

// Protected admin routes
router.post("/", authMiddleware, upload.single("image"), createService);
router.put("/:id", authMiddleware, upload.single("image"), updateService);
router.delete("/:id", authMiddleware, deleteService);

module.exports = router;

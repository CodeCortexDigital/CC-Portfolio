const express = require("express");
const {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");
const upload = require("../config/upload");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.get("/", getProjects);
router.get("/:id", getProject);

// Protected admin routes
router.post("/", authMiddleware, upload.single("image"), createProject);
router.put("/:id", authMiddleware, upload.single("image"), updateProject);
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;

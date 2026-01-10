const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      default: [],
    },
    liveLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "web",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);

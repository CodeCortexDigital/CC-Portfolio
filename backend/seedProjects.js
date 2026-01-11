require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");

const seedProjects = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding projects");

    await Project.deleteMany();

    await Project.insertMany([
      {
        title: "Portfolio Website",
        description: "Personal portfolio built with MERN stack",
        image: "",
        link: "https://codecortex.vercel.app"
      }
    ]);

    console.log("✅ Projects seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding projects:", error);
    process.exit(1);
  }
};

seedProjects();

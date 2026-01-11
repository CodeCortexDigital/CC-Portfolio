require("dotenv").config();
const mongoose = require("mongoose");
const Service = require("./models/Service");

const seedServices = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding services");

    await Service.deleteMany();

    await Service.insertMany([
      {
        title: "Web Development",
        description: "Full-stack modern web applications"
      },
      {
        title: "UI/UX Design",
        description: "Clean, modern and user-friendly designs"
      }
    ]);

    console.log("✅ Services seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding services:", error);
    process.exit(1);
  }
};

seedServices();

require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Service = require("./models/Service");

// ===============================
// SERVICES DATA
// ===============================
const services = [
  {
    title: "Enterprise Web Development",
    description:
      "Scalable, secure, and high-performance web applications built with modern frameworks and best practices.",
    icon: "fas fa-code",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    icon: "fas fa-mobile-alt",
    features: [
      "iOS & Android Apps",
      "React Native Development",
      "App Maintenance",
      "Store Deployment",
    ],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions leveraging artificial intelligence to automate processes and gain insights.",
    icon: "fas fa-brain",
    features: [
      "Predictive Analytics",
      "Process Automation",
      "Chatbot Development",
      "Computer Vision",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup, migration, and DevOps practices for scalable and reliable deployments.",
    icon: "fas fa-cloud",
    features: [
      "AWS / Azure / GCP Setup",
      "CI/CD Pipelines",
      "Containerization",
      "Infrastructure as Code",
    ],
  },
];

// ===============================
// SEED FUNCTION
// ===============================
const seedServices = async () => {
  try {
    // Connect DB
    await connectDB();
    console.log("MongoDB connected for seeding services");

    // Check existing services
    const existingServices = await Service.find();

    if (existingServices.length > 0) {
      console.log("⚠️ Services already exist. Skipping seed.");
      process.exit(0);
    }

    // Insert services
    const createdServices = await Service.insertMany(services);

    console.log(`✅ Successfully seeded ${createdServices.length} services:`);
    createdServices.forEach((service) =>
      console.log(`   • ${service.title}`)
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding services:", error);
    process.exit(1);
  }
};

seedServices();

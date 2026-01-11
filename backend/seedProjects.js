require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");
const connectDB = require("./config/db");

// Connect to database
connectDB();

const projects = [
  {
    title: "Enterprise CRM System",
    description: "Custom CRM solution with AI-powered analytics for sales optimization and customer relationship management.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    category: "crm",
    featured: true,
    icon: "fas fa-briefcase",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "E-commerce Platform",
    description: "Scalable multi-vendor marketplace with mobile applications, payment integration, and inventory management.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    category: "ecommerce",
    featured: true,
    icon: "fas fa-shopping-cart",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80"
  },
  {
    title: "Inventory Management System",
    description: "Comprehensive inventory tracking and management solution with real-time stock updates, automated reordering, and detailed analytics.",
    technologies: ["React", "JSON", "Node.js", "MongoDB"],
    category: "inventory",
    featured: true,
    icon: "fas fa-boxes",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80"
  }
];

async function seedProjects() {
  try {
    // Delete existing projects first to re-seed with images
    await Project.deleteMany({});
    console.log("🗑️  Cleared existing projects");

    // Insert projects with images
    const createdProjects = await Project.insertMany(projects);
    console.log(`✅ Successfully seeded ${createdProjects.length} projects with images:`);
    createdProjects.forEach(project => {
      console.log(`   - ${project.title} (${project.image ? 'Image added' : 'No image'})`);
    });
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding projects:", error);
    process.exit(1);
  }
}

seedProjects();


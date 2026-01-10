# Seed Data Instructions

## How to Add Code Cortex Services and Projects

### Option 1: Using Seed Scripts (Recommended)

1. **Make sure MongoDB is running:**
   ```bash
   mongod
   ```

2. **Seed Services:**
   ```bash
   cd backend
   npm run seed:services
   ```

3. **Seed Projects:**
   ```bash
   npm run seed:projects
   ```

4. **Or seed both at once:**
   ```bash
   npm run seed:all
   ```

### Option 2: Using Admin Panel

1. Start both servers:
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm start

   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

2. Go to Admin Panel:
   - Visit: http://localhost:5173/admin/login
   - Register/Login

3. Add Services:
   - Go to "Services" tab
   - Click "Add New service"
   - Fill in the form:

   **Service 1: Enterprise Web Development**
   - Title: Enterprise Web Development
   - Description: Scalable, secure, and high-performance web applications built with modern frameworks and best practices.
   - Icon: fas fa-code
   - Features (one per line):
     ```
     Custom Web Applications
     E-commerce Solutions
     CMS Development
     API Integration
     ```

   **Service 2: Mobile App Development**
   - Title: Mobile App Development
   - Description: Native and cross-platform mobile applications for iOS and Android with seamless user experiences.
   - Icon: fas fa-mobile-alt
   - Features:
     ```
     iOS & Android Apps
     React Native Development
     App Maintenance
     Store Deployment
     ```

   **Service 3: AI & Machine Learning**
   - Title: AI & Machine Learning
   - Description: Intelligent solutions leveraging artificial intelligence to automate processes and gain insights.
   - Icon: fas fa-brain
   - Features:
     ```
     Predictive Analytics
     Process Automation
     Chatbot Development
     Computer Vision
     ```

   **Service 4: Cloud & DevOps**
   - Title: Cloud & DevOps
   - Description: Cloud infrastructure setup, migration, and DevOps practices for scalable and reliable deployments.
   - Icon: fas fa-cloud
   - Features:
     ```
     AWS/Azure/GCP Setup
     CI/CD Pipelines
     Containerization
     Infrastructure as Code
     ```

4. Add Projects:
   - Go to "Projects" tab
   - Click "Add New project"
   - Fill in:

   **Project 1: Enterprise CRM System**
   - Title: Enterprise CRM System
   - Description: Custom CRM solution with AI-powered analytics for sales optimization and customer relationship management.
   - Technologies: React, Node.js, PostgreSQL
   - Category: crm

   **Project 2: E-commerce Platform**
   - Title: E-commerce Platform
   - Description: Scalable multi-vendor marketplace with mobile applications, payment integration, and inventory management.
   - Technologies: Vue.js, Laravel, MySQL
   - Category: ecommerce

   **Project 3: Financial Analytics Dashboard**
   - Title: Financial Analytics Dashboard
   - Description: Real-time data visualization and predictive analytics platform for financial institutions.
   - Technologies: Python, TensorFlow, D3.js
   - Category: analytics

## Services Included

✅ Enterprise Web Development
✅ Mobile App Development
✅ AI & Machine Learning
✅ Cloud & DevOps

## Projects Included

✅ Enterprise CRM System
✅ E-commerce Platform
✅ Financial Analytics Dashboard

All services and projects will display with the Code Cortex dark theme design!


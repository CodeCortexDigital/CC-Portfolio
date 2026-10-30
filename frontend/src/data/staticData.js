// Built-in content used when the portfolio API is unreachable or returns nothing.
// Projects mirror the products on https://www.codecortexdigital.com
export const staticProjects = [
  {
    "_id": "p1",
    "title": "CleanRoute AI: AI-Powered Smart Waste Management",
    "description": "An intelligent waste management platform that detects waste conditions, prioritizes complaints, optimizes crew routes, verifies cleanup, and provides operational analytics — with Computer Vision (OpenCV + MobileNetV2), priority classification (Decision Tree + Naive Bayes), route optimization (Google OR-Tools), Poisson/Linear forecasting, and Isolation Forest anomaly detection.",
    "technologies": [
      "Computer Vision",
      "Route Optimization",
      "Forecasting",
      "Anomaly Detection"
    ],
    "category": "ai",
    "featured": true,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/cleanroute-ai.html"
  },
  {
    "_id": "p2",
    "title": "CC-EMS: AI-Powered School ERP",
    "description": "A full-stack, multi-tenant school ERP with 9 AI features — AI report card comments, dropout prediction, fee default prediction, admission screening, homework helper, parent message summarizer, AI timetable generator, behaviour pattern detection, and translation across 23 languages. GDPR-ready with 45 currencies.",
    "technologies": [
      "9 AI Features",
      "NLP",
      "Prediction",
      "Django",
      "React"
    ],
    "category": "ai",
    "featured": true,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/erp-v2.html"
  },
  {
    "_id": "p3",
    "title": "CC-IMS: Enterprise ERP with AI Intelligence",
    "description": "A production-ready enterprise platform integrating HR, CRM, Finance, Project Operations, Governance, Security, and AI-powered intelligence — with AI classification, risk scoring, forecasting, and intelligent business insights. Includes a risk-aware Unified Approval Engine and real-time notifications.",
    "technologies": [
      "Risk Scoring",
      "Forecasting",
      "NestJS",
      "Next.js",
      "Claude AI"
    ],
    "category": "ai",
    "featured": true,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/cc-ims.html"
  },
  {
    "_id": "p4",
    "title": "SafeKid: AI Student Transport Safety",
    "description": "A mobile-based student transport platform connecting drivers, assistants, and parents through QR-based pickup and drop tracking, live GPS monitoring, smart notifications, messaging, billing, and AI-powered ETA prediction — giving parents proof their child was picked up and dropped off safely.",
    "technologies": [
      "ETA Prediction",
      "QR Automation",
      "Flutter",
      "Firebase"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/safekid.html"
  },
  {
    "_id": "p5",
    "title": "Gas & Elects Monitor",
    "description": "An offline-first Flutter utility app for tracking, monitoring, and forecasting gas & electricity consumption — dual light/dark Material 3, multi-meter management, and an automatic recalculation engine.",
    "technologies": [
      "Flutter",
      "SQLite",
      "Material 3",
      "Offline"
    ],
    "category": "web",
    "featured": false,
    "icon": "fas fa-code",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/gas-elects-monitor.html"
  },
  {
    "_id": "p6",
    "title": "Task Manager (MVP)",
    "description": "A modern, production-ready task manager with JWT auth, full CRUD, an interactive Kanban board, smart due dates, priority system, and a real-time dashboard — deployed on Vercel + Render.",
    "technologies": [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "category": "web",
    "featured": false,
    "icon": "fas fa-code",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/task-manager.html"
  },
  {
    "_id": "p7",
    "title": "SmartMed-AI: Doctor Matching & Telehealth",
    "description": "An AI-assisted doctor-patient matching platform that maps symptoms to the right specialist, with booking, chat, and an offline AI chatbot that emails doctors automatically.",
    "technologies": [
      "Node.js",
      "Express",
      "Firebase",
      "Vanilla JS"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/smartmed-ai.html"
  },
  {
    "_id": "p8",
    "title": "CareerMind.AI: AI Career Coaching Platform",
    "description": "A full-stack AI career coach — React + FastAPI + PostgreSQL with Gemini (Groq fallback) powering skill-gap analysis, roadmaps, resume ATS scoring, mock interviews, and a job-application Kanban.",
    "technologies": [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Gemini"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/careermind-ai.html"
  },
  {
    "_id": "p9",
    "title": "ScholarFlow: AI Research Paper Analysis Agent",
    "description": "A full-stack research agent to upload, fetch, summarize, and chat with papers — then organize libraries, generate literature reviews, and assess rigor & bias.",
    "technologies": [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Gemini"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/scholarflow.html"
  },
  {
    "_id": "p10",
    "title": "Plant Watering: AI Plant Health & Watering System",
    "description": "An AI-powered plant health monitor that predicts plant state from sensor data and combines ML with a rule-based engine to recommend watering actions. Built in Streamlit during an AI/ML fellowship.",
    "technologies": [
      "Streamlit",
      "Python",
      "XGBoost",
      "scikit-learn"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/plant-watering-system.html"
  },
  {
    "_id": "p11",
    "title": "FoodGuard-AI: AI Food Freshness & Safety Detection",
    "description": "An AI-powered food freshness and safety detector that analyzes food images to classify freshness (Fresh / Moderate Risk / Spoiled) and advise whether to eat or discard — built with React, FastAPI, and Google Gemini.",
    "technologies": [
      "React",
      "FastAPI",
      "Gemini",
      "Computer Vision"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/foodguard-ai.html"
  },
  {
    "_id": "p12",
    "title": "CC-POS: Point of Sale for Shops",
    "description": "Built for Pakistani retailers: it keeps selling when the internet or power goes out, tracks stock and customer credit (khata), and reports invoices to FBR. English and Urdu, with the phone doubling as a barcode scanner, demand forecasting, price watch and expiry rescue.",
    "technologies": [
      "Offline-first",
      "FBR Invoice QR",
      "English + Urdu",
      "Forecasting"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/cc-pos.html"
  },
  {
    "_id": "p13",
    "title": "Industrial AI: Detect Problems Early",
    "description": "Machine-health monitoring from vibration and temperature data, plus phone-camera surface defect inspection covering six steel defect types. REST API and live dashboard included; validated on public benchmark data, with a short pilot on your own plant data as the next step.",
    "technologies": [
      "Anomaly Detection",
      "Defect Detection",
      "Computer Vision",
      "REST API"
    ],
    "category": "ai",
    "featured": false,
    "icon": "fas fa-brain",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    "liveUrl": "https://www.codecortexdigital.com/projects/industrial-ai.html"
  }
];

export const staticServices = [
  {
    "_id": "s1",
    "title": "AI & Intelligent Solutions",
    "description": "AI/ML systems, automation, predictive analytics and computer vision built as production-grade products.",
    "icon": "fas fa-brain",
    "features": [
      "Risk scoring and early warnings",
      "Computer vision (OpenCV, YOLO, MobileNetV2)",
      "Route optimisation with Google OR-Tools",
      "Language AI and assistants that answer from your own data"
    ]
  },
  {
    "_id": "s2",
    "title": "Software & Web Development",
    "description": "Modern web apps, enterprise platforms and custom software engineered to scale with your operations.",
    "icon": "fas fa-code",
    "features": [
      "React and Next.js front ends",
      "Django, FastAPI and NestJS back ends",
      "PostgreSQL and Firebase data layers",
      "Documented APIs for your other systems"
    ]
  },
  {
    "_id": "s3",
    "title": "Cloud & Digital Platforms",
    "description": "Scalable architectures, APIs, integrations, and cloud deployment and CI/CD.",
    "icon": "fas fa-cloud",
    "features": [
      "Docker and CI/CD pipelines",
      "Role-based access and audit logs",
      "Multi-tenant data isolation and backups",
      "Deployment guides and handover"
    ]
  },
  {
    "_id": "s4",
    "title": "Product & UI/UX",
    "description": "Modern, intuitive, business-focused digital experiences designed around real user needs.",
    "icon": "fas fa-pen-ruler",
    "features": [
      "Web apps and Flutter mobile apps",
      "Urdu and Arabic right-to-left support",
      "Dashboards and reports",
      "Weekly check-ins with clear milestones"
    ]
  },
  {
    "_id": "s5",
    "title": "Ready-to-Adapt Industry Products",
    "description": "Proven products you can customise to your business, with AI built into each one.",
    "icon": "fas fa-industry",
    "features": [
      "Education: CC-EMS, SafeKid",
      "Enterprise: CC-IMS",
      "Retail: CC-POS",
      "Smart City: CleanRoute-AI",
      "Manufacturing: anomaly and defect detection",
      "Transport: SafeKid"
    ]
  },
  {
    "_id": "s6",
    "title": "Pilot, Build & Support",
    "description": "A low-risk path from idea to production, with confidentiality and IP terms agreed in writing before work starts.",
    "icon": "fas fa-handshake",
    "features": [
      "Understand: short review of your system, data and goals",
      "Pilot: fixed scope, price and written acceptance tests",
      "Build: weekly check-ins, modular architecture",
      "Support: deployment, documentation and maintenance"
    ]
  }
];

export const staticTestimonials = [];

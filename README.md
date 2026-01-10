# Portfolio Web Application

A full-stack portfolio web application built with React (frontend) and Node.js/Express (backend) with MongoDB database. This application allows you to showcase your projects, services, and testimonials with a complete admin panel for content management.     
  
## Features

### Frontend
- **Modern React Application** with React Router for navigation
- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Lazy Loading** - Code splitting for better performance
- **Beautiful UI** - Modern, clean, and professional design
- **Pages:**
  - Home page with hero section
  - Projects showcase page
  - Services page
  - About page with testimonials
  - Contact page with form

### Backend
- **RESTful API** built with Express.js
- **MongoDB Database** with Mongoose ODM
- **JWT Authentication** for admin access
- **File Upload** support using Multer
- **CRUD Operations** for Projects, Services, and Testimonials
- **Protected Routes** - Admin-only endpoints

### Admin Panel
- **Secure Login/Registration** system
- **Dashboard** for managing content
- **CRUD Interface** for:
  - Projects (with image upload)
  - Services (with image upload)
  - Testimonials (with image upload)
- **User-friendly Forms** with validation

## Tech Stack

### Frontend
- React 19.2.0
- React Router DOM 7.11.0
- Vite (Build tool)
- CSS3 (Custom styling)

### Backend
- Node.js
- Express 5.2.1
- MongoDB with Mongoose 9.1.1
- Multer 2.0.2 (File uploads)
- JWT (JSON Web Tokens)
- bcryptjs (Password hashing)
- CORS (Cross-origin resource sharing)

## Project Structure

```
Portfolio-webApp-Task/
├── backend/
│   ├── config/
│   │   ├── db.js          # MongoDB connection
│   │   └── upload.js      # Multer configuration
│   ├── controllers/
│   │   ├── projectController.js
│   │   ├── serviceController.js
│   │   ├── testimonialController.js
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication
│   ├── models/
│   │   ├── Project.js
│   │   ├── Service.js
│   │   ├── Testimonial.js
│   │   └── Admin.js
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   ├── serviceRoutes.js
│   │   ├── testimonialRoutes.js
│   │   └── authRoutes.js
│   ├── uploads/            # Uploaded images storage
│   ├── server.js           # Express server
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── admin/
│   │   │       ├── AdminLogin.jsx
│   │   │       └── AdminDashboard.jsx
│   │   ├── services/
│   │   │   └── api.js      # API service functions
│   │   ├── styles/
│   │   │   └── main.css    # Global styles
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your system:
```bash
# For local MongoDB
mongod
```

4. Update database connection in `backend/config/db.js` if needed:
```javascript
// Default: mongodb://127.0.0.1:27017/portfolioDB
```

5. Create `.env` file (optional) for JWT secret:
```env
JWT_SECRET=your-secret-key-here
PORT=5000
```

6. Start the backend server:
```bash
npm start
# or
node server.js
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## Usage

### Initial Admin Setup

1. Open your browser and navigate to: `http://localhost:5173/admin/login`
2. Click on "Register" to create your first admin account
3. Fill in:
   - Username
   - Email
   - Password (minimum 6 characters)
4. After registration, you'll be automatically logged in

### Managing Content

#### Projects
- Go to Admin Dashboard → Projects tab
- Click "Add New project"
- Fill in:
  - Title (required)
  - Description (required)
  - Technologies (comma-separated, e.g., "React, Node.js, MongoDB")
  - Live Link (optional)
  - GitHub Link (optional)
  - Image (optional)
  - Featured checkbox (optional)

#### Services
- Go to Admin Dashboard → Services tab
- Click "Add New service"
- Fill in:
  - Title (required)
  - Description (required)
  - Icon (emoji, optional)
  - Price (optional)
  - Image (optional)

#### Testimonials
- Go to Admin Dashboard → Testimonials tab
- Click "Add New testimonial"
- Fill in:
  - Name (required)
  - Role (required)
  - Company (optional)
  - Message (required)
  - Rating (1-5, default: 5)
  - Image (optional)

### Viewing Portfolio

- **Home**: `http://localhost:5173/`
- **Projects**: `http://localhost:5173/projects`
- **Services**: `http://localhost:5173/services`
- **About**: `http://localhost:5173/about`
- **Contact**: `http://localhost:5173/contact`

## API Endpoints

### Public Endpoints

#### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project

#### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get single service

#### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `GET /api/testimonials/:id` - Get single testimonial

### Protected Endpoints (Require Admin Token)

#### Authentication
- `POST /api/auth/register` - Register new admin
- `POST /api/auth/login` - Login admin
- `GET /api/auth/me` - Get current admin (requires token)

#### Projects (Admin)
- `POST /api/projects` - Create project (requires token)
- `PUT /api/projects/:id` - Update project (requires token)
- `DELETE /api/projects/:id` - Delete project (requires token)

#### Services (Admin)
- `POST /api/services` - Create service (requires token)
- `PUT /api/services/:id` - Update service (requires token)
- `DELETE /api/services/:id` - Delete service (requires token)

#### Testimonials (Admin)
- `POST /api/testimonials` - Create testimonial (requires token)
- `PUT /api/testimonials/:id` - Update testimonial (requires token)
- `DELETE /api/testimonials/:id` - Delete testimonial (requires token)

### Authentication

Include the JWT token in the Authorization header:
```
Authorization: Bearer <your-token>
```

## File Upload

- Supported formats: JPG, JPEG, PNG
- Files are stored in `backend/uploads/` directory
- Images are accessible at: `http://localhost:5000/uploads/<filename>`

## Development

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

The build files will be in `frontend/dist/`

**Backend:**
The backend is ready for production. Make sure to:
- Set environment variables
- Use a strong JWT_SECRET
- Configure CORS for your domain
- Use a production MongoDB connection string

## Security Notes

- Change the default JWT_SECRET in production
- Use environment variables for sensitive data
- Implement rate limiting for production
- Add input validation and sanitization
- Use HTTPS in production
- Regularly update dependencies

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check the connection string in `backend/config/db.js`
- Verify MongoDB is accessible on port 27017

### CORS Errors
- Backend CORS is configured to allow all origins in development
- Update CORS settings in `backend/server.js` for production

### Image Upload Issues
- Ensure `backend/uploads/` directory exists
- Check file permissions
- Verify file size limits (configure in `backend/config/upload.js`)

### Port Already in Use
- Change the port in `backend/server.js` or use environment variable
- For frontend, Vite will automatically use the next available port

## Contributing

This is a portfolio project. Feel free to fork and customize for your own use!

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please check the code comments or create an issue in the repository.

---

**Built with ❤️ using React, Node.js, and MongoDB**


# Quick Setup Guide

## Prerequisites
- Node.js installed (v14+)
- MongoDB running locally or MongoDB Atlas account

## Step-by-Step Setup

### 1. Backend Setup

```bash
cd backend
npm install
```

**Important:** Create the uploads directory if it doesn't exist:
```bash
mkdir uploads
```

Start MongoDB (if using local MongoDB):
```bash
# Windows
mongod

# Mac/Linux
sudo mongod
```

Start the backend server:
```bash
npm start
```

Backend will run on: `http://localhost:5000`

### 2. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

### 3. First Time Admin Setup

1. Open browser: `http://localhost:5173/admin/login`
2. Click "Register"
3. Create your admin account:
   - Username: (your choice)
   - Email: (your email)
   - Password: (minimum 6 characters)
4. You'll be redirected to the dashboard

### 4. Add Sample Content

#### Add a Project:
1. Go to Admin Dashboard → Projects
2. Click "Add New project"
3. Fill in the form and upload an image
4. Click "Create"

#### Add a Service:
1. Go to Admin Dashboard → Services
2. Click "Add New service"
3. Fill in the form
4. Click "Create"

#### Add a Testimonial:
1. Go to Admin Dashboard → Testimonials
2. Click "Add New testimonial"
3. Fill in the form
4. Click "Create"

### 5. View Your Portfolio

Visit: `http://localhost:5173`

Navigate through:
- Home
- Projects
- Services
- About
- Contact

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `backend/config/db.js`

### Port Already in Use
- Backend: Change PORT in `backend/server.js`
- Frontend: Vite will auto-select next available port

### Images Not Showing
- Ensure `backend/uploads/` directory exists
- Check file permissions
- Verify backend is serving static files

### Admin Login Issues
- Make sure you registered first
- Check browser console for errors
- Verify backend is running

## Next Steps

1. Customize the content in Admin Dashboard
2. Add your own projects, services, and testimonials
3. Update contact information in Contact page
4. Modify styles in `frontend/src/styles/main.css`
5. Deploy to production (Vercel for frontend, Render/Railway for backend)

## Production Deployment Notes

- Set strong JWT_SECRET in environment variables
- Use MongoDB Atlas for database
- Configure CORS for your domain
- Use HTTPS
- Set up proper file storage (Cloudinary/AWS S3 for images)


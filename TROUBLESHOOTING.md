# Services Not Showing - Troubleshooting Guide

## ✅ Current Status
- ✅ Backend Server: RUNNING on port 5000
- ✅ MongoDB: CONNECTED
- ✅ Services in Database: 4 services confirmed
- ✅ API Endpoint: http://localhost:5000/api/services - WORKING

## 🔍 Debugging Steps

### 1. Check Browser Console
Open browser DevTools (F12) and check Console tab for:
- Any error messages
- "Fetching services from API..." log
- "Services received:" log with data

### 2. Verify Backend is Running
```bash
# Test in browser or terminal
curl http://localhost:5000/api/services
```
Should return JSON with 4 services.

### 3. Check Frontend Server
Make sure frontend is running:
```bash
cd frontend
npm run dev
```
Should show: `http://localhost:5173/`

### 4. Check Network Tab
In browser DevTools → Network tab:
- Look for request to `http://localhost:5000/api/services`
- Check if it returns 200 status
- Check response data

### 5. Clear Browser Cache
- Press Ctrl+Shift+R (hard refresh)
- Or clear browser cache

### 6. Check CORS
Backend has CORS enabled, but if you see CORS errors:
- Make sure backend server.js has: `app.use(cors());`

## 🛠️ Quick Fixes

### If services still not showing:

1. **Restart Backend:**
   ```bash
   cd backend
   npm start
   ```

2. **Restart Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Check API directly:**
   Open in browser: http://localhost:5000/api/services
   Should see JSON array with 4 services

4. **Verify Services in DB:**
   ```bash
   cd backend
   node -e "const mongoose = require('mongoose'); const Service = require('./models/Service'); const connectDB = require('./config/db'); (async () => { await connectDB(); const services = await Service.find(); console.log('Services:', services.length); process.exit(0); })();"
   ```

## 📝 Expected Behavior

When working correctly:
1. Page loads → Shows "Loading services..."
2. API call succeeds → Console shows "Services received: [array]"
3. Services render → 4 cards appear with:
   - Enterprise Web Development
   - Mobile App Development
   - AI & Machine Learning
   - Cloud & DevOps

## 🐛 Common Issues

1. **Backend not running** → Start with `npm start` in backend folder
2. **MongoDB not running** → Start MongoDB service
3. **CORS errors** → Backend CORS is enabled, check server.js
4. **Network errors** → Check firewall/antivirus blocking localhost
5. **Port conflicts** → Check if port 5000 or 5173 already in use


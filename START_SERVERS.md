# How to Start Both Servers

## Step 1: Start MongoDB

**Option A: If MongoDB is installed as a service (Windows)**
- MongoDB should start automatically
- If not, open Services and start MongoDB

**Option B: Manual Start**
```bash
# Navigate to MongoDB bin directory (usually)
cd "C:\Program Files\MongoDB\Server\7.0\bin"
mongod
```

**Option C: Using MongoDB Compass**
- Open MongoDB Compass
- It will start MongoDB automatically

## Step 2: Start Backend Server

Open Terminal 1:
```bash
cd backend
npm start
```

You should see:
```
MongoDB connected
Server running on port 5000
```

## Step 3: Start Frontend Server

Open Terminal 2:
```bash
cd frontend
npm run dev
```

You should see:
```
VITE v7.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

## Step 4: Verify Services are Seeded

If services are not showing, run:
```bash
cd backend
npm run seed:services
```

## Troubleshooting

### Backend not starting?
- Check if MongoDB is running
- Check if port 5000 is available
- Check backend/package.json has all dependencies

### Services not showing?
1. Make sure backend is running on port 5000
2. Make sure MongoDB is running
3. Run seed script: `npm run seed:services`
4. Check browser console for errors
5. Verify API: Open http://localhost:5000/api/services in browser

### MongoDB Connection Error?
- Make sure MongoDB is installed and running
- Check connection string in `backend/config/db.js`
- Default: `mongodb://127.0.0.1:27017/portfolioDB`


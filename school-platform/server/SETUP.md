# School Platform Backend — Setup & Testing

## 📋 Quick Start

### **Option 1: Local Docker (Recommended for local testing)**

1. **Install Docker** (if not already installed)
   - Download from: https://www.docker.com/products/docker-desktop

2. **Start MongoDB with Docker Compose:**
   ```bash
   cd school-platform/server
   docker-compose up -d
   ```
   
   This starts MongoDB on `localhost:27017` with:
   - Username: `admin`
   - Password: `password123`
   - Database: `school_platform`

3. **.env is already configured** for Docker (first line is active)

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```
   
   You should see: `✓ Server running on port 5000`

---

### **Option 2: MongoDB Atlas (Cloud)**

1. **Get your MongoDB SRV link** (you already have it)

2. **Edit `.env`:**
   - Comment out the Docker line
   - Uncomment the Atlas line
   - Paste your SRV link

3. **Install & start:**
   ```bash
   npm install
   npm run dev
   ```

---

## 🧪 Testing APIs in Browser

### **1. Health Check**
```
http://localhost:5000/health
```
Expected: `{"status":"Server is running"}`

### **2. School Search**
```
http://localhost:5000/api/schools/search?q=test
```
Expected: `[]` (empty if no schools in DB)

### **3. Testing with curl** (in terminal)

**Register a student:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Student","email":"john@test.com","password":"test123","role":"student","school_id":"507f1f77bcf86cd799439011"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"test123","school_id":"507f1f77bcf86cd799439011"}'
```

**Submit school request:**
```bash
curl -X POST http://localhost:5000/api/schools/request \
  -H "Content-Type: application/json" \
  -d '{"school_name":"Delhi Public School","city":"Delhi","contact_name":"Principal","contact_email":"admin@dps.com","contact_phone":"9876543210"}'
```

---

## 🛑 Stopping MongoDB

```bash
docker-compose down
```

---

## 📝 Notes

- `.env` file has both options configured
- Use Docker for local development (no cloud account needed)
- Use MongoDB Atlas for production/deployment
- Both options are pre-configured in `.env`
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

// Import database connection
const connectDB = require('./config/db');

// Import routes
const authRoutes = require('./routes/auth.routes');
const schoolRoutes = require('./routes/schools.routes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: [
      process.env.STUDENT_URL,
      process.env.TEACHER_URL,
      process.env.ADMIN_URL,
      process.env.CONTROLLER_URL,
    ],
    credentials: true,
  },
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      process.env.STUDENT_URL,
      process.env.TEACHER_URL,
      process.env.ADMIN_URL,
      process.env.CONTROLLER_URL,
    ],
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/schools', schoolRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Socket.io setup (basic)
io.on('connection', (socket) => {
  console.log('✓ User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('✗ User disconnected:', socket.id);
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✓ Server running on port ${PORT}`);
});

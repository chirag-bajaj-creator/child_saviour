const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth.middleware');
const { register, login, refreshToken } = require('../controllers/auth.controller');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.post('/refresh-token', authenticateToken, refreshToken);

module.exports = router;

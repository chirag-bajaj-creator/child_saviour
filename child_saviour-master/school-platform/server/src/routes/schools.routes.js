const express = require('express');
const router = express.Router();
const { searchSchools, submitSchoolRequest, getSchoolById, getAllSchoolRequests, approveSchoolRequest, rejectSchoolRequest } = require('../controllers/schools.controller');
const { authenticateToken } = require('../middleware/auth.middleware');
const roleMiddleware = require('../middleware/role.middleware');

// Public routes
router.get('/search', searchSchools);
router.post('/request', submitSchoolRequest);
router.get('/:id', getSchoolById);

// Admin only routes
router.get('/requests/all', authenticateToken, roleMiddleware('admin'), getAllSchoolRequests);
router.post('/requests/:id/approve', authenticateToken, roleMiddleware('admin'), approveSchoolRequest);
router.post('/requests/:id/reject', authenticateToken, roleMiddleware('admin'), rejectSchoolRequest);

module.exports = router;

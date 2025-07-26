const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');
const authMiddleware = require('../middleware/authMiddleware');

// Employee routes
router.post('/', authMiddleware, leaveController.submitLeave);
router.get('/my', authMiddleware, leaveController.getMyLeaves);

// Admin routes
router.get('/', authMiddleware, leaveController.getAllLeaves); // add admin check if needed
router.put('/:leaveId', authMiddleware, leaveController.updateLeaveStatus); // add admin check if needed

module.exports = router;

const express = require('express');
const router = express.Router();
const assignmentController = require('../controllers/assignmentController');

router.post('/assign', assignmentController.assignProject);
router.put('/update', assignmentController.updateAssignmentStatus);

module.exports = router;

const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
    project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    candidate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
    score: { type: Number, default: 0 }
});

module.exports = mongoose.model('Assignment', AssignmentSchema);

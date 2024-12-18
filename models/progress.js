const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    assignment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' },
    tasks_completed: { type: Number, default: 0 },
    total_tasks: { type: Number, required: true },
    score: { type: Number, default: 0 }
});

module.exports = mongoose.model('Progress', ProgressSchema);

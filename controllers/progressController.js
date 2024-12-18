const Progress = require('../models/progress');
const Assignment = require('../models/assignment');

exports.updateProgress = async (req, res) => {
    const { assignment_id, tasks_completed } = req.body;
    try {
        const assignment = await Assignment.findById(assignment_id);
        const total_tasks = 5; // For simplicity, assume each project has 5 tasks

        let progress = await Progress.findOne({ assignment_id });

        if (!progress) {
            progress = new Progress({ assignment_id, total_tasks });
        }

        progress.tasks_completed = tasks_completed;
        progress.score = (tasks_completed / total_tasks) * 100;
        await progress.save();

        res.status(200).json(progress);
    } catch (err) {
        res.status(400).json({ message: 'Error updating progress', error: err });
    }
};

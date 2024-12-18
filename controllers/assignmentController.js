const Assignment = require('../models/assignment');
const Project = require('../models/project');
const User = require('../models/user');

exports.assignProject = async (req, res) => {
    const { project_id, candidate_id } = req.body;
    try {
        const assignment = new Assignment({ project_id, candidate_id });
        await assignment.save();

        // Update project status to 'Assigned'
        await Project.findByIdAndUpdate(project_id, { status: 'Assigned' });

        res.status(201).json(assignment);
    } catch (err) {
        res.status(400).json({ message: 'Error assigning project', error: err });
    }
};

exports.updateAssignmentStatus = async (req, res) => {
    const { assignment_id, status } = req.body;
    try {
        const assignment = await Assignment.findByIdAndUpdate(assignment_id, { status }, { new: true });
        res.status(200).json(assignment);
    } catch (err) {
        res.status(400).json({ message: 'Error updating assignment status', error: err });
    }
};

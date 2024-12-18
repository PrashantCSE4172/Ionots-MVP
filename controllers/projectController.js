const Project = require('../models/project');

exports.createProject = async (req, res) => {
    const { name, description, due_date } = req.body;
    try {
        const project = new Project({ name, description, due_date });
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: 'Error creating project', error: err });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching projects', error: err });
    }
};

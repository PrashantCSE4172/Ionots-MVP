const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Route to get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all projects
    res.status(200).json(projects); // Send projects as JSON response
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Route to create a new project
router.post('/', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required' });
  }

  try {
    const newProject = new Project({ name, description });
    await newProject.save(); // Save the new project to the database
    res.status(201).json(newProject); // Respond with the newly created project
  } catch (err) {
    res.status(500).json({ message: 'Error creating project' });
  }
});

// Route to update an existing project (optional)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: 'Error updating project' });
  }
});

// Route to delete a project (optional)
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting project' });
  }
});

module.exports = router;

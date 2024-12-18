const mongoose = require('mongoose');

// Define the Project Schema
const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create the model based on the schema
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

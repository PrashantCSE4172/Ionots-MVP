import React, { useEffect, useState } from 'react';
import axios from '../axiosInstance'; // Assuming you've set up axios
import { Button, Grid, Container, Typography } from '@mui/material';
import ProjectList from '../components/ProjectList'; // Assuming this is a component you created
import ProgressTracker from '../components/ProgressTracker'; // Assuming this is another component

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    axios.get('/projects') // Ensure you have set up the backend endpoint properly
      .then(response => {
        setProjects(response.data);
      })
      .catch(err => {
        console.error("Error fetching projects", err);
      });
  }, []);

  const handleAcceptProject = (projectId) => {
    // Logic for accepting project
    setSelectedProject(projectId); // Simulate selecting a project
  };

  const handleTaskComplete = (taskIndex) => {
    // Logic to update task completion
    setProgress((prevProgress) => ({
      ...prevProgress,
      tasks_completed: prevProgress.tasks_completed + 1,
    }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Ionots Dashboard!
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProjectList projects={projects} onAccept={handleAcceptProject} />
        </Grid>

        {selectedProject && (
          <Grid item xs={12}>
            <ProgressTracker progress={progress} onTaskComplete={handleTaskComplete} />
          </Grid>
        )}
      </Grid>

      <Button variant="contained" color="primary" onClick={() => console.log('Logging out...')}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;

import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';

const ProjectList = ({ projects, onAccept }) => {
  return (
    <div>
      {projects.map(project => (
        <Card key={project._id} style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="h5">{project.name}</Typography>
            <Typography>{project.description}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onAccept(project._id)}
              style={{ marginTop: '10px' }}
            >
              Accept
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;

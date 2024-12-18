import React from 'react';
import { Checkbox, LinearProgress, Grid } from '@mui/material';

const ProgressTracker = ({ progress, onTaskComplete }) => {
  const { tasks_completed, total_tasks = 5 } = progress;

  return (
    <div>
      <h3>Project Progress</h3>
      <LinearProgress
        variant="determinate"
        value={(tasks_completed / total_tasks) * 100}
      />
      <div>
        {Array.from({ length: total_tasks }).map((_, index) => (
          <Grid container key={index} alignItems="center">
            <Grid item>
              <Checkbox
                checked={index < tasks_completed}
                onChange={() => onTaskComplete(index)}
              />
            </Grid>
            <Grid item>Task {index + 1}</Grid>
          </Grid>
        ))}
      </div>
      <p>Tasks Completed: {tasks_completed} / {total_tasks}</p>
    </div>
  );
};

export default ProgressTracker;

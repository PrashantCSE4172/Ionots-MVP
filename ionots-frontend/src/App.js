import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import Dashboard from './pages/Dashboard'; // Assuming this is your Dashboard page
import Login from './pages/Login'; // Assuming this is your Login page

const App = () => {
  // State to manage whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom align="center" style={{ marginTop: '20px' }}>
          Ionots - Project Dashboard
        </Typography>

        {/* Routes setup */}
        <Routes>
          {/* If the user is logged in, show the Dashboard route */}
          {isLoggedIn ? (
            <Route path="/" element={<Dashboard />} />
          ) : (
            // If the user is not logged in, show the Login route
            <Route path="/login" element={<Login />} />
          )}
        </Routes>

        {/* Show login button only if the user is not logged in */}
        {!isLoggedIn && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsLoggedIn(true)} // Log in the user
            style={{ marginTop: '20px' }}
          >
            Login
          </Button>
        )}
      </Container>
    </Router>
  );
}

export default App;

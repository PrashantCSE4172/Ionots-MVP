import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const Login = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" style={{ marginTop: '50px' }}>
        Please Login
      </Typography>

      <Button variant="contained" color="primary" fullWidth>
        Login with Google
      </Button>
    </Container>
  );
}

export default Login;

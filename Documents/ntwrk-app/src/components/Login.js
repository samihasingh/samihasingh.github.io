import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';
import NetworkBackground from './NetworkBackground';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <NetworkBackground />
      <Box elevation={3} sx={{ mt: 10, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={`${process.env.PUBLIC_URL}/ntwrk-login.png`} alt="ntwrk logo" style={{ width: '250px', marginBottom: '0px' }} />
      </Box>      
      <Paper elevation={3} sx={{ mt: 0, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 0 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: 'black',
              color: 'white',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
            }}
          >
            Log in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
import React, { useState } from 'react';
import { Box, TextField, Button, Container, Paper } from '@mui/material';
import NetworkBackground from './NetworkBackground';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Registration attempted with:', username, email, password);
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
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
              error={password !== confirmPassword}
              helperText={password !== confirmPassword ? 'Passwords do not match' : ''}
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
            Sign up for ntwrk
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;
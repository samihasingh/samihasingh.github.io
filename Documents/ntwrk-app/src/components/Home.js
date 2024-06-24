// src/components/Home.js
import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import NetworkBackground from './NetworkBackground';

const Home = () => {
  return (
    <>
      <NetworkBackground />
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 10%',
          backgroundColor: 'transparent',
          position: 'relative',
          zIndex: 1,
          fontFamily: 'inherit' // Inherit the font family from the theme
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: -1 }}>
          <strong>welcome to your</strong>
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
          ntwrk.
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
          ntwrk is your digital rolodex and personal networking assistant.
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1">stay <strong>connected & maintain relationships</strong></Typography>
          <Typography variant="body1">build a <strong>robust support system</strong></Typography>
          <Typography variant="body1">discover <strong>greater career growth</strong> through a stronger network</Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" sx={{ mr: 2, backgroundColor: 'black', color: 'white', textTransform: 'none', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}>
              sign up
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="primary" sx={{ color: 'black', borderColor: 'black', textTransform: 'none', '&:hover': { borderColor: 'black', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
            log in
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Home;
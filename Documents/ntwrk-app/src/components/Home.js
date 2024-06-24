// src/components/Home.js
import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
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
          ntwrk is your personal networking assistant.
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1">stay <strong>connected & maintain relationships</strong></Typography>
          <Typography variant="body1">build a <strong>robust support system</strong></Typography>
          <Typography variant="body1">discover <strong>greater career growth</strong> through a stronger network</Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2, backgroundColor: 'black', color: 'white', textTransform: 'none', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' } }}>
            sign up
          </Button>
          <Button variant="outlined" color="primary" sx={{ color: 'black', borderColor: 'black', textTransform: 'none', '&:hover': { borderColor: 'black', backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}>
            log in
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;

// claude code
// import React from 'react';
// import { Typography, Button, Box } from '@mui/material';
// import NetworkBackground from './NetworkBackground';
// import theme from '../theme'

// const Home = () => {
//   return (
//     <>
//         <NetworkBackground />
//         <Box
//         sx={{
//             height: '100vh',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'flex-start',
//             padding: '0 10%',
//             backgroundImage: 'url("/network-background.svg")',
//             backgroundSize: 'cover',
//             backgroundPosition: 'right center',
//             fontFamily: theme.typography.fontFamily,
//         }}
//         >
//         <Typography variant="body1">welcome to your</Typography>
//         <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
//             ntwrk.
//         </Typography>
//         <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 3 }}>
//             ntwrk is your personal networking assistant.
//         </Typography>
//         <Box sx={{ mb: 2 }}>
//             <Typography variant="body1">stay <strong>connected & maintain relationships</strong></Typography>
//             <Typography variant="body1">build a <strong>robust support system</strong></Typography>
//             <Typography variant="body1">discover <strong>greater career growth</strong> through a stronger network</Typography>
//         </Box>
//         <Box>
//             <Button variant="contained" color="primary" sx={{ mr: 2 }}>
//             sign up
//             </Button>
//             <Button variant="outlined" color="primary">
//             log in
//             </Button>
//         </Box>
//         </Box>
//     </>
//   );
// };

// export default Home;

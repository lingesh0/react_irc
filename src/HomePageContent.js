import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePageContent = () => {
  return (
    <Box sx={{ backgroundColor: '#b3d999', padding: 10 }}>
      <Typography variant="h4" component="h2">Welcome to Krishna Hospital</Typography>
      <Typography variant="body1">Dedicated to your health and well-being.</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Box sx={{ background: "#c1f1ef", padding: 2 }}>
          <Typography variant="subtitle1">Schedule an Appointment</Typography>
          <Typography variant="body2">Book your appointment online with ease.</Typography>
          <Button variant="contained" color="primary">Book Now</Button>
        </Box>

        <Box sx={{ background: "#c1f1ef", padding: 2 }}>
          <Typography variant="subtitle1">Explore Our Services</Typography>
          <Typography variant="body2">Find out more about our specialties and treatments.</Typography>
          <Button variant="outlined">Learn More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageContent;

import React from 'react';
import {Box,Typography,Button,Card} from '@mui/material';
const HospitalManagementCards = () => {
    return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 4,backgroundColor: '6' }}>
      <Card sx={{ padding: 2, backgroundColor: '#c1f1ef' }}>
        <Typography variant="h6">Patient Portal</Typography>
        <Typography variant="body2">Manage your appointments, records, and billing.</Typography>
        <Button variant="text">Access Now</Button>
      </Card>
      <Card sx={{ padding: 2, backgroundColor: '#c1f1ef' }}>
        <Typography variant="h6">Find a Doctor</Typography>
        <Typography variant="body2">Search for specialists near you by condition or name.</Typography>
        <Button variant="text">Search Now</Button>
      </Card>
      <Card sx={{ padding: 2, backgroundColor: '#c1f1ef' }}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="body2">Get in touch with our friendly staff for any questions.</Typography>
        <Button variant="text">Contact Us</Button>
      </Card>
    </Box>
    )
};
  
  export default HospitalManagementCards;
  
import React, { useState } from 'react';
import {Link as Linkk} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Button,
  Box,
  Typography,
  IconButton,
  Link,
} from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HospitalManagementCards from './HospitalManagementCards';
import HomePageContent from './HomePageContent';
import DrawerComp from './DrawerComp';

const FacebookIcon = require('@mui/icons-material/Facebook').default;
const TwitterIcon = require('@mui/icons-material/Twitter').default;
const InstagramIcon = require('@mui/icons-material/Instagram').default;

const SocialMediaIcon = ({ icon, link }) => (
  <IconButton size="small" sx={{ color: 'white' }}>
    <Link href={link} target="_blank">{icon}</Link>
  </IconButton>
);

const Footer = () => (
  <Box sx={{ backgroundColor: '#2C3E50',marginTop: '50px', padding: '20px', color: 'white' }}>
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Typography variant="body1">
        Krishna Hospitals <br />
        Gandipuram,Coimbatore <br />
          Email:krishnaHospitals@gmail.com [email] <br />
          Phone: 9876543210 <br />
          Fax: 2747-9425
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Follow Us</Typography>
        <Box display="flex">
          <SocialMediaIcon icon={<FacebookIcon />} link="https://www.facebook.com/yourhospitalpage" />
          <SocialMediaIcon icon={<TwitterIcon />} link="https://twitter.com/yourhospitalpage" />
          <SocialMediaIcon icon={<InstagramIcon />} link="https://www.instagram.com/yourhospitalpage" />
        </Box>
      </Box>
    </Box>
    <Typography variant="caption" sx={{ textAlign: 'center', marginTop: '10px' }}>
      Copyright © 2023 Krishna Hospitals. All rights reserved.
    </Typography>
  </Box>
);

const Header = () => {
  const [value, setValue] = useState();


  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970' }}>
        <Toolbar>
        <Button  sx={{marginRight: '2px'}} varient="contained"><DrawerComp /></Button> 

          <MedicalServicesIcon />

          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Linkk to='/home' style={{color:'white'}}><Tab label="Home" /></Linkk>
            <Linkk to='/service' style={{color:'white'}}><Tab label="Services" /></Linkk>
            <Tab label="Contact Us" />
            <Linkk to='/about' style={{color:'white'}}><Tab label="About Us" /></Linkk>
          </Tabs>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Linkk to='/signin'> <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Login
          </Button></Linkk>
          <Button>
            <AccountCircleIcon style={{ color: 'skyblue', padding: '5px' }} />
          </Button>
        </Toolbar>
      </AppBar>

      <HomePageContent />
      <HospitalManagementCards />

      <Footer />
    </React.Fragment>
  );
};

export default Header;

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {
 IconButton,
    Link,
  } from '@mui/material';
const aboutSections = [
  {
    title: 'Our Mission',
    content:
      'To provide high-quality, compassionate healthcare services to our community, utilizing advanced technology and a patient-centered approach.',
  },
  {
    title: 'Our Vision',
    content:
      'To be a leading healthcare institution recognized for excellence in patient care, medical research, and healthcare education.',
  },
  {
    title: 'Values',
    content:
      'Compassion, Integrity, Excellence, Collaboration, and Innovation.',
  },
];

const AboutCard = ({ title, content }) => (
  <Card sx={{ borderRadius: 4, marginBottom: 3 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{content}</Typography>
    </CardContent>
  </Card>
);

const AboutPage = () => (
  <Box sx={{ padding: 4, maxWidth: '100vw', backgroundColor: '#c1f1ef' }}>
    <Typography variant="h2" component="h1" gutterBottom>
      About Us
    </Typography>
    <Grid container spacing={3}>
      {aboutSections.map((section) => (
        <Grid item xs={12} md={6} key={section.title}>
          <AboutCard title={section.title} content={section.content} />
        </Grid>
      ))}
    </Grid>
    <Footer />
  </Box>
);
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


export default AboutPage;

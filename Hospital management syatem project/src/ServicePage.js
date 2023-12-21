import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

const services = [
  {
    title: 'Emergency & Trauma Care',
    description: 'Our team of experienced doctors and nurses are available 24/7 to provide immediate care for critical situations.',
  },
  {
    title: 'Outpatient Services',
    description: 'Schedule appointments with our specialists for various medical needs, including cardiology, neurology, and pediatrics.',
  },
  {
    title: 'Diagnostic & Imaging Services',
    description: 'We offer a range of advanced diagnostic tools like X-rays, CT scans, and MRIs to accurately diagnose your health conditions.',
  },
  {
    title: 'Surgical Services',
    description: 'Our skilled surgeons perform a variety of procedures with advanced technology and compassionate care.',
  },
  {
    title: 'Laboratory Services',
    description: 'Our accredited laboratory provides comprehensive testing for blood, urine, and other samples to support accurate diagnoses.',
  },
];

const ServiceCard = ({ title, description }) => (
  <Card sx={{ borderRadius: 4, marginBottom: 3, backgroundColor: '#2477e0' }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </CardContent>
  </Card>
);

export default function ServicesPage() {
  return (
    <Box sx={{ padding: 5, maxWidth: '100vw', backgroundColor: '#7aeee0' }}>
      <Box sx={{ backgroundColor: '', paddingBottom: 3 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Our Comprehensive Services
        </Typography>
        <Typography variant="body1" gutterBottom>
          At [Hospital Name], we are dedicated to providing a wide range of high-quality healthcare services to our community.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} md={6} key={service.title}>
            <ServiceCard title={service.title} description={service.description} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
        <IconButton href="tel:+911234567890">
          <CallIcon fontSize="large" />
          <Typography variant="body2">Emergency Line: +91 123 456 7890</Typography>
        </IconButton>
        <IconButton href="mailto:info@hospitalname.com">
          <MailIcon fontSize="large" />
          <Typography variant="body2">General Inquiries: info@hospitalname.com</Typography>
        </IconButton>
      </Box>
    </Box>
  );
}

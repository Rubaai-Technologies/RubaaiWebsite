import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import Hero from "../../assets/home/hereo.png";

const HeroComponent = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        backgroundColor: 'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="dec-device-height"
    >
      <Container maxWidth="xl" sx={{ py: 4 }} className="dec-body-margin">
        <Box
          className="dec-hero-height"
          sx={{ position: 'relative' }}
          display="flex"
          alignItems="center"
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box px={5}>
                <Typography variant="h4" color="white" gutterBottom>
                  Managing your money has never been easier.
                </Typography>
                <Typography variant="h6" color="white" paragraph>
                  Welcome to RUBAAI, the new era of mobile money.  We accompany you every step of the way. We provide powerful tools to track your income.
                </Typography>
                <Button variant="contained">DOWNLOAD NOW</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={Hero}
                alt="hero image"
                sx={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroComponent;

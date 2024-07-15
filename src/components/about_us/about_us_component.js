import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const AboutComponent = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="black"
        >
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <Grid container spacing={4} justifyContent="center" direction='column'>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 4, bgcolor: 'black' }}>
                            <CardContent>
                                <Typography variant="h5" color="white" gutterBottom>
                                    Mission
                                </Typography>
                                <Typography variant="body1" color="white" paragraph>
                                    To simplify inward remittance, daily transactions and financial management by making financial services accessible, seamless, and secure through our innovative payment application.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 4, bgcolor: 'black' }}>
                            <CardContent>
                                <Typography variant="h5" color="white" gutterBottom>
                                    Vision
                                </Typography>
                                <Typography variant="body1" color="white" paragraph>
                                    To become the leading digital payment solution provider, enabling efficient financial transactions for individuals and businesses globally.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 4, bgcolor: 'black' }}>
                            <CardContent>
                                <Typography variant="h5" color="white" gutterBottom>
                                    Objectives
                                </Typography>
                                <ul >
                                    <li color='white'>
                                        <Typography variant="body1" color="white">
                                            Achieve a user base of 100,000+ within the first year.
                                        </Typography>
                                    </li>
                                    <li color='white'>
                                        <Typography variant="body1" color="white">
                                            Establish partnerships with 500+ business organizations for integration.
                                        </Typography>
                                    </li>
                                    <li color='white'>
                                        <Typography variant="body1" color="white">
                                            Process transactions worth LKR 70 million in the first year.
                                        </Typography>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutComponent;

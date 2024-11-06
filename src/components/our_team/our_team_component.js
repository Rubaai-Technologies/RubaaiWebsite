import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Ganeshwaran from '../../assets/home/ganeswaran.jpg';
import Croos from '../../assets/home/croos.jpg';
import Joice from '../../assets/home/joice.jpg';


const OurTeamComponent = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="black"
        >
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                <Typography variant="h3" align="center" color="white" mb={10}>
                    Management Team
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 4, bgcolor: 'white' }}>
                            <CardContent>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={Ganeshwaran}
                                        alt="CEO Image"
                                        sx={{ width: 150, height: 150, borderRadius: '50%', marginBottom: 2 }}
                                    />
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        E Ganeshwaran
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph>
                                        CEO
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 4, bgcolor: 'white' }}>
                            <CardContent>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={Croos}
                                        alt=" CTO Image"
                                        sx={{ width: 150, height: 150, borderRadius: '50%', marginBottom: 2 }}
                                    />
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        I Andrewson Croos
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph>
                                        CTO
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderRadius: 4, bgcolor: 'white' }}>
                            <CardContent>
                                <Box display="flex" flexDirection="column" alignItems="center">
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={Joice}
                                        alt="GM Image"
                                        sx={{ width: 150, height: 150, borderRadius: '50%', marginBottom: 2 }}
                                    />
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        J Joice Peries
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" paragraph>
                                        GM
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OurTeamComponent;

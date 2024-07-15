import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';

const SupportComponent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="black"
        >
            <Container maxWidth="sm" sx={{ mt: 4 }}>
                <Card sx={{ borderRadius: 4, bgcolor: 'white' }}>
                    <CardContent>
                        <Typography variant="h5" color="textPrimary" align="center" gutterBottom>
                            Support Request
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        label="Description"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} align="center">
                                    <Button type="submit" variant="contained" color="primary">
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default SupportComponent;

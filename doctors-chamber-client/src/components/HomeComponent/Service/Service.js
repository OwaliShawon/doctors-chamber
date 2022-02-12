import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={12} sm={6} md={4} padding={3} >
            <Card sx={{ minWidth: 275, boxShadow: 3, padding: 4 }} alignItems="center">
                <CardMedia
                    component="img"
                    style={{ height: "80px", width: "auto", margin: "auto" }}
                    image={img}
                    alt="service"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;
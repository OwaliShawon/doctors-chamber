import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/bg.png';
import doctor from '../../../images/doctor.png';


const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const DoctorBanner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '450px' }} src={doctor} alt="" />
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'right' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            This is Doctor  <br />
                            Nurul Alam
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>MEET TODAY</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DoctorBanner;

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import chair from '../../../images/chair.png';
import Calender from '../Calender/Calender';


const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2} mt={10}>
                <Grid item xs={12} md={6}>
                    <Calender
                        date={date}
                        setDate={setDate}>
                    </Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="chair" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;
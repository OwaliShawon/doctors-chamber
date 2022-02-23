import Grid from '@mui/material/Grid';
import React from 'react';
import Calender from '../../AppointmentComponent/Calender/Calender';
import Appointments from './../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date().toDateString());
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Calender
                        date={date}
                        setDate={setDate}>
                    </Calender>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Appointments
                        date={date}
                        setDate={setDate}>
                    </Appointments>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;
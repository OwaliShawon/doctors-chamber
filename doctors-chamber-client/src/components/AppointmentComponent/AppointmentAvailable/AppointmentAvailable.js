import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import Bookings from '../Bookings/Bookings';


const AppointmentAvailable = ({ date, setDate }) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
        },
    ]
    console.log(date);
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', mb: 3, mt: 20 }}>Available Appointment On {date.toDateString()}</Typography>
            <Grid container spacing={3}>
                {
                    bookings.map(booking => <Bookings
                        date={date}
                        key={booking.id}
                        booking={booking}>
                    </Bookings>)
                }
            </Grid>
        </Container>
    );
};

export default AppointmentAvailable;
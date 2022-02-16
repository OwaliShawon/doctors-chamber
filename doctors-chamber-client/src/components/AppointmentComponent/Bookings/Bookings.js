import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date, setBookingSuccess }) => {
    // console.log(props.name);
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    const { name, time, space } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ padding: "50px" }}>
                    <Typography variant='h5' sx={{ color: 'info.main' }}>{name}</Typography>
                    <Typography variant='h6'>{time}</Typography>
                    <Typography variant='caption'>{space} Spaces Available</Typography>
                    <Button variant="contained" onClick={handleBookingOpen}>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Bookings;
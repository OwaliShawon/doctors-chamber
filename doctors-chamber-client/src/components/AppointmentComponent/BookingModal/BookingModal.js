import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ booking, openBooking, handleBookingClose, date }) => {
    const { name, time } = booking;

    const handleBookingSubmit = (e) => {
        alert("Booking Successful");
        e.preventDefault();
        // 
        // 
        handleBookingClose();
    }

    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography>{name}</Typography>
                <form onSubmit={handleBookingSubmit}>
                    <TextField fullWidth label={date.toDateString()} id="fullWidth" disabled sx={{ m: 1 }} />
                    <TextField fullWidth label={time} id="fullWidth" disabled sx={{ m: 1 }} />
                    <TextField fullWidth label="Your Name" id="fullWidth" sx={{ m: 1 }} />
                    <TextField fullWidth label="Your Number" id="fullWidth" sx={{ m: 1 }} />
                    <TextField fullWidth label="Your Email" id="fullWidth" sx={{ m: 1 }} />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;
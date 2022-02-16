import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { React, useState } from 'react';
import useAuth from './../../../hooks/useAuth';

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

const BookingModal = ({ booking, openBooking, handleBookingClose, date, setBookingSuccess }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialBookingData = { patientName: user.name, patientEmail: user.email, patientNumber: user.number };
    const [bookingData, setBookingData] = useState(initialBookingData);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingData = { ...bookingData };
        newBookingData[field] = value;
        setBookingData(newBookingData);
        // console.log(newBookingData);
    }

    const handleBookingSubmit = (e) => {
        // collect data
        const appointment = {
            ...bookingData,
            time: time,
            date: date.toDateString(),
            serviceName: name,
        }

        // send data to server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        // console.log(appointment);

        handleBookingClose();
        setBookingSuccess(true);
        e.preventDefault();
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
                    <TextField
                        fullWidth
                        label={date.toDateString()}
                        id="fullWidth"
                        disabled
                        sx={{ m: 1 }} />
                    <TextField
                        fullWidth
                        label={time}
                        id="fullWidth"
                        disabled
                        sx={{ m: 1 }} />
                    <TextField
                        name="patientName"
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName}
                        fullWidth
                        label="Your Name"
                        id="fullWidth"
                        sx={{ m: 1 }} />
                    <TextField
                        name="patientNumber"
                        onBlur={handleOnBlur}
                        fullWidth
                        label="Your Number"
                        id="fullWidth"
                        sx={{ m: 1 }} />
                    <TextField
                        onBlur={handleOnBlur}
                        name="patientEmail"
                        defaultValue={user.email}
                        fullWidth
                        label="Your Email"
                        id="fullWidth"
                        sx={{ m: 1 }} />
                    <Button
                        type="submit"
                        variant="contained"
                    >Submit</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;
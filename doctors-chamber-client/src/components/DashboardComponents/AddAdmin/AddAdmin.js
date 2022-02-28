import { Alert, Button, Grid, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const handleAdminSubmit = (e) => {
        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                // 'authentication': `Bearer ${token}`,
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                setSuccess(true);
            })

        e.preventDefault();
        console.log('Admin Added', email);
    }

    // handle blur
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <Stack container>
                    <Grid xs={12} md={12}>
                        <TextField onBlur={handleOnBlur} label="Enter Your Email Address" type="email" variant="standard" fullWidth />
                    </Grid>
                    <Grid xs={12} md={12} marginTop={2}>
                        <Button type='submit' variant="contained" fullWidth>Make Admin</Button>
                    </Grid>
                </Stack>
            </form>

            {success && <Alert severity='success'>Made Admin Successfully</Alert>}
        </div>
    );
};

export default AddAdmin;
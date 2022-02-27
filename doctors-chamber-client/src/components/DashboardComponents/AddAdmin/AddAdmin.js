import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleAdminSubmit = (e) => {
        const user = { email };

        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authentication': `Bearer ${token}`,
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
                <TextField onBlur={handleOnBlur} label="Email" type="email" variant="standard" />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>

            {success && <Alert severity='success'>Made Admin Successfully</Alert>}
        </div>
    );
};

export default AddAdmin;
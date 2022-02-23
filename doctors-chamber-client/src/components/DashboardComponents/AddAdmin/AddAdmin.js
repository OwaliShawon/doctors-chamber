import { Button, TextField } from '@mui/material';
import React from 'react';

const AddAdmin = () => {
    const [email, setEmail] = React.useState('');

    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        e.preventDefault();
        console.log('Admin Added', email);
    }
    // handle blur
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }



    console.log(email);

    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField onBlur={handleOnBlur} label="Email" type="email" variant="standard" />
                <Button type='submit' variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default AddAdmin;
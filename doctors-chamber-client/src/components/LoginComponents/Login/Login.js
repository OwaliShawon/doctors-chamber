import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert('Login Successful');
    }
    // console.log(loginData);
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant="body2" component="h1" marginTop={5}>Login</Typography>
                    <form action="submit" onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            required
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant='standard'
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            required
                            id="standard-basic"
                            label="Your Pass "
                            name='password'
                            onChange={handleOnChange}
                            variant='standard'
                            type={'password'}
                        />
                        <Button variant='contained' sx={{ width: '100%', m: 1 }} type="submit">Login</Button>
                        <NavLink to="/register"><Button variant="text">New User? Please Register</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={8}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
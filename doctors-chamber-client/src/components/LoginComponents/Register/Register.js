import { Alert, AlertTitle, CircularProgress, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("pass did not match")
        }
        registerUser(loginData.name, loginData.email, loginData.password, navigate);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" component="h1" marginTop={5}>Register</Typography>
                    <form action="submit" onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            required
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant='standard'
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            required
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant='standard'
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            required
                            id="standard-basic"
                            label="Your Pass "
                            name='password'
                            onBlur={handleOnBlur}
                            variant='standard'
                            type={'password'}
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            required
                            id="standard-basic"
                            label="Retype Pass"
                            name='password2'
                            onBlur={handleOnBlur}
                            variant='standard'
                            type={'password'}
                        />
                        <Button variant='contained' sx={{ width: '100%', m: 1 }} type="submit">Signup</Button>
                        <NavLink to="/login"><Button variant="text">Already Register? Please Login</Button></NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">
                        <AlertTitle>DONE</AlertTitle>
                        Your Registration is — <strong>Successful!</strong>
                    </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={8}>
                    <img src={login} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
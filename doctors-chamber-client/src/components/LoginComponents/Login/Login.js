import { Alert, AlertTitle, CircularProgress, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, registerUser, loginUser, isLoading } = useAuth();

    let navigate = useNavigate();
    let location = useLocation();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, navigate, location);
        e.preventDefault();
        // alert('Login Successful');
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" component="h1" marginTop={5}>Login</Typography>
                    {!isLoading && <form action="submit" onSubmit={handleLoginSubmit}>
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
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">
                        <AlertTitle>DONE</AlertTitle>
                        Your Login is — <strong>Successful!</strong>
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

export default Login;
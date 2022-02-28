import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOutUser } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }} marginBottom={5}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="inherit" align="left">
                        <NavLink to="/" color="white">Doctors Chamber</NavLink>
                    </Typography>

                    <Link to="/appointment"><Button color="inherit">Appointment</Button></Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                <Button color="inherit">Hi! {user.displayName}</Button>
                                <Button onClick={logOutUser} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink to="/login" color="inherit"><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;
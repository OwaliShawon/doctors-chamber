import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) { return <CircularProgress></CircularProgress> }
    return (
        <>
            {
                user.email ? children : <Navigate to="/login" />
            }
        </>

    );
};

export default PrivateRoute;
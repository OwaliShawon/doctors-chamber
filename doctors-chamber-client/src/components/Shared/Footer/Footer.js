import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

const Footer = () => {

    return (
        <div>
            <Stack spacing={1} margin={3}>
                <Typography>Designed & Built by<a className="address text-info" href='https://github.com/OwaliShawon'> Owali Ullah Shawon</a></Typography>
            </Stack>
        </div>
    );
};

export default Footer;
import React from 'react';
import Services from '../../components/HomeComponent/Services/Services';
import AppointmentBanner from './../../components/AppointmentComponent/AppointmentBanner/AppointmentBanner';
import HeroBanner from './../../components/HomeComponent/HeroBanner/HeroBanner';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;
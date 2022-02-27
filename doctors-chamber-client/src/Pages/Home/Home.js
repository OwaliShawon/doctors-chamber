import React from 'react';
import DoctorBanner from '../../components/HomeComponent/DoctorBanner/DoctorBanner';
import Services from '../../components/HomeComponent/Services/Services';
import AppointmentBanner from './../../components/AppointmentComponent/AppointmentBanner/AppointmentBanner';
import HeroBanner from './../../components/HomeComponent/HeroBanner/HeroBanner';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <DoctorBanner></DoctorBanner>
            <Services></Services>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;
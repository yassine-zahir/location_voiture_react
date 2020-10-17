import React from 'react';

import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedVehicles from '../Components/FeaturedVehicles';
import Location from '../Components/Location';
import DatePicker from '../Components/DatePicker';

function Home() {
    return (
        <>
        <Hero>
            
            <Banner title="Luxury and Prestige Cars " subtitle="All Categories Are Availabe Starting At 99MAD">
                <Link to='/vehicles' className="btn-primary">
                    Our Vehicles
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedVehicles/>
        <Location/>
        </>
    )
}

export default Home

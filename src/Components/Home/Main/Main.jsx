import React from 'react';
import SpecialPackage from '../SpecialPackage/SpecialPackage';
import Offer from '../Offer/Offer';
import Discount from '../Discount/Discount';
import Blog from '../Blog/Blog';
import HajjUmrah from '../HajjUmrah/HajjUmrah';
import PersonPackage from '../PersonPckage/PersonPackage';
import Slider from '../Slider/Slider';
import Carusel from '../Navbar/Carusel';
import Testimonials from '../../Testimonials/Testimonials';

const Main = () => {
    return (
        <div className=''>
            <Carusel />
            <Slider />
            <SpecialPackage />
            <Offer />
            <HajjUmrah />
            <PersonPackage />
            <Discount />
            <Testimonials />
            <Blog />
        </div>
    );
};

export default Main;
import React from 'react';
import SpecialPackage from '../SpecialPackage/SpecialPackage';
import Offer from '../Offer/Offer';
import Discount from '../Discount/Discount';
import Blog from '../Blog/Blog';
import HajjUmrah from '../HajjUmrah/HajjUmrah';
import PersonPackage from '../PersonPckage/PersonPackage';

const Main = () => {
    return (
        <div>
            <SpecialPackage />
            <Offer />
            <HajjUmrah />
            <PersonPackage />
            <Discount />
            <Blog />
        </div>
    );
};

export default Main;
import React from 'react';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import Slider from './Slider';
import Hajj from './Hajj';
import Umrah from './Umrah';

const Dynamic = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3'>
            <PersonalInfo />
            <ContactInfo />
            <Slider />
            <Hajj />
            <Umrah />
        </div>
    );
};

export default Dynamic;

import React from 'react';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import Slider from './Slider';
import Hajj from './Hajj';
import Umrah from './Umrah';

const Dynamic = () => {
    return (
        <div className='md:grid md:grid-cols-3 flex'>
            <PersonalInfo />
            <ContactInfo />
            <Slider />
            <Hajj />
            <Umrah />
        </div>
    );
};

export default Dynamic;

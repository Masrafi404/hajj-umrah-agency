import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            <div className='w-[94%] mx-auto fixed top-5 left-0 right-0 z-10'>
                <div className='bg-black pb-2 pt-1'>
                    <h1 className='text-center text-white text-4xl font-bold'>Al-Azwa</h1>
                </div>
                <div className='bg-yellow-400 py-2 px-2.5' onClick={handleToggle}>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </div>
                {isOpen && (
                    <ul className='bg-white text-sm'>
                        <li className='uppercase'>home</li>
                        <li className='uppercase'>about</li>
                        <li className='uppercase'>package</li>
                        <li className='uppercase'>contact</li>
                    </ul>
                )}
            </div>

            <Carousel className='text-center' showArrows={true}>
                <div className='relative'>
                    <img src="image1.jpg" />
                    <div className='absolute bottom-28 left-0 right-0 z-10 text-white'>
                        <p className='font-bold text-[1.7rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="image2.jpg" />
                    <div className='absolute bottom-28 left-0 right-0 z-10 text-white'>
                        <p className='font-bold text-[1.7rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="image4.jpg" />
                    <div className='absolute bottom-28 left-0 right-0 z-10 text-white'>
                        <p className='font-bold text-[1.7rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Navbar;

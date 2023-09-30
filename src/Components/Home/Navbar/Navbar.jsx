import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative'>
            <div className='w-[94%] md:w-[65%] mx-auto fixed md:top-10 top-5 left-0 right-0 z-10'>
                <div className='md:flex md:justify-between items-center bg-black px-6 py-8'>
                    <div className='hidden md:inline-block'>
                        <div className='flex items-center text-[15px]'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white font-[1000]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-white ms-1'>MON-SAT: 6.00 AM - 10.00 PM</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-white text-[14px] ms-5'>SUN: CLOSED</p>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-center text-white md:text-4xl font-bold text-2xl'>Janani Travel Agency</h1>

                        <h1 className='hidden md:inline-block text-center text-white text-2xl font-medium'>Government approved travel agent</h1>
                    </div>
                    <div className='md:flex md:items-center hidden'>
                        <button className="text-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                            <i className="fa fa-twitter"></i>
                        </button>
                        <button className="text-white  shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                            <i className="fa fa-facebook"></i>
                        </button>
                        <button className="text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                            <i className="fa fa-instagram"></i>
                        </button>
                        <Link to="https://github.com/Masrafi404/hajj-umrah-agency">
                            <button className="text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                                <i className="fa fa-github"></i>
                            </button>
                        </Link>
                        <div className='flex items-center ms-4'>
                            <img src="bg1.png" className='w-6 h-6 rounded-full' alt="" />
                            <div>
                                <p className='text-white ms-1'>BD</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-yellow-400 py-2 px-2.5'>


                    <ul className="text-black font-medium md:flex justify-evenly text-sm mx-30% py-3 hidden sm:flex mx-[30%]">
                        <li className="uppercase"><Link>home</Link></li>
                        <li className="uppercase"><Link to="about">about</Link></li>
                        <li className="uppercase"><Link>package</Link></li>
                        <li className="uppercase"><Link>contact</Link></li>
                    </ul>


                    <span className='inline-block sm:hidden'>
                        {isOpen ? (
                            <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </span>
                </div>
                {isOpen && (
                    <ul className="text-black font-medium text-sm bg-white space-y-1 ps-3 py-2">
                        <li className="uppercase"><Link>home</Link></li>
                        <li className="uppercase"><Link to="/about">about</Link></li>
                        <li className="uppercase"><Link>package</Link></li>
                        <li className="uppercase"><Link>contact</Link></li>
                    </ul>
                )}
            </div>

            <Carousel className='text-center' showArrows={true}>
                <div className='relative'>
                    <img src="image1.jpg" />
                    <div className='absolute md:bottom-28 bottom-14 left-0 right-0 z-10 text-white'>
                        <p className='font-bold md:text-[1.7rem] text-[1.5rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="image2.jpg" />
                    <div className='absolute md:bottom-28 bottom-14 left-0 right-0 z-10 text-white'>
                        <p className='font-bold md:text-[1.7rem] text-[1.5rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="image3.jpg" />
                    <div className='absolute md:bottom-28 bottom-14 left-0 right-0 z-10 text-white'>
                        <p className='font-bold md:text-[1.7rem] text-[1.5rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
            </Carousel>

        </div>
    );
};

export default Navbar;

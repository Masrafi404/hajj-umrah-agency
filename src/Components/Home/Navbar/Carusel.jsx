import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Modal from '../../Modal/Modal';


const Carusel = () => {


    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)

    return (

        <Carousel className='text-center' showArrows={true}>
            <div className=''>
                <img className='' src="slider1.jpg" />
            </div>
            <div className='relative'>
                <img className='' src="image1.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text shadow-text'>Solution for Travel in Makka</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>
                        Apply Now
                    </button>
                </div>

            </div>
            <div className='relative'>
                <img src="image11.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text shadow-text'>Solution for Travel in Madina</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img src="image4.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text shadow-text'>Solution for The Umrah</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img className='' src="image22.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text shadow-text'>Solution for Travel in Dubai</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img src="image23.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text'>Solution for Travel in Switzerland</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img src="image24.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text'>Solution for Travel in Luxembourg</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img src="image25.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text'>Solution for Travel in Maldives</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img src="image26.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text'>Solution for Travel in Thailand</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img src="image27.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text'>Solution for Travel in Nepal</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <div className='relative'>
                <img className='' src="image28.jpg" />
                <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                    <p className='font-bold md:text-[2.5rem] text-[2rem] sm:mx-4 shadow-text'>Solution for Travel in Kashmir</p>
                    <button className='uppercase text-[15px] text-black bg-yellow-400 px-5 py-3 rounded-3xl'>apply now</button>
                </div>
            </div>
            <Modal onClose={handleClose} visible={showModal} />
        </Carousel>
    );
};

export default Carusel;
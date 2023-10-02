import React from 'react';
import img1 from './slider1.jpg'
import img2 from './slider2.jpg'
import img3 from './slider3.jpg'
import img4 from './slider4.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { useState } from 'react';

const Slider = () => {
    const sliders = [
        {
            url: img1
        },
        {
            url: img2
        },
        {
            url: img3
        },
        {
            url: img4
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLatestSlide = currentIndex === sliders.length - 1;
        const newIndex = isLatestSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className='mt-10 mb-14'>
            <h1 className='text-center font-medium text-xl text-yellow-400 '>Our Service</h1>
            <div className='px-4 relative max-w-[1280px] h-[600px] mt-5 mx-auto'>
                <div
                    style={{
                        backgroundImage: `url(${sliders[currentIndex].url})`,
                        backgroundSize: 'contain', // Set background-size to 'contain'
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100%', // Ensure the image takes up the full width of the container
                        height: '100%', // Ensure the image takes up the full height of the container
                    }}
                    className='w-full h-full rounded-2xl duration-500'
                ></div>
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/70 text-white cursor-pointer' onClick={prevSlide}>
                    <BsChevronCompactLeft size={30} />
                </div>
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/70 text-white cursor-pointer' onClick={nextSlide}>
                    <BsChevronCompactRight size={30} />
                </div>
            </div>
        </div>
    );

};

export default Slider;
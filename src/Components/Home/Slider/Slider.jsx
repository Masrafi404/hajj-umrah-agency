import React from 'react';
import img1 from './slider1.jpg';
import img2 from './slider2.jpg';
import img3 from './slider3.jpg';
import img4 from './slider4.jpg';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';

const Slider = () => {
    const [info, setInfo] = useState([]);
    const sliders = [
        {
            url: info?.image1 || img1,
        },
        {
            url: info?.image2 || img2,
        },
        {
            url: info?.image3 || img3,
        },
        {
            url: info?.image4 || img4,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextSlide = () => {
        const isLatestSlide = currentIndex === sliders.length - 1;
        const newIndex = isLatestSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    console.log(info)
    useEffect(() => {
        fetch('http://localhost:3000/slider')
            .then((res) => res.json())
            .then((data) => {
                data.map(dt => setInfo(dt))
            })
            .catch((error) => {
                console.error('Error fetching slider info:', error);
            });
    }, []);

    return (
        <div className="md:mt-10">
            <h1 className="text-center font-medium text-xl text-yellow-400">Our Service</h1>
            <div className="md:px-4 relative w-[100%] md:h-[500px] h-[200px] md:max-w-[1400px] mt-5 mx-auto">
                <div
                    style={{
                        backgroundImage: `url(${sliders[currentIndex].url})`,
                        backgroundSize: 'contain', // Use 'cover' to make the image take full width and height
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        width: '100%',
                        height: '100%', // Set height to 100% for smaller devices
                    }}
                    className="w-[600px] h-[600px] md:h-[180px] rounded-2xl duration-500"
                ></div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/70 text-white cursor-pointer" onClick={prevSlide}>
                    <BsChevronCompactLeft size={30} />
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/70 text-white cursor-pointer" onClick={nextSlide}>
                    <BsChevronCompactRight size={30} />
                </div>
            </div>
        </div>
    );
};

export default Slider;

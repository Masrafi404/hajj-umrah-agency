import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Blog = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    return (
        <div className='my-6'>
            <h3 className='text-[13px] uppercase font-medium text-center text-yellow-300'>blog & news</h3>
            <h1 className='text-xl font-medium mb-2 mt-1 text-center'>Keep always updated with our fresh blog posts</h1>
            <Carousel
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className='mx-4'
            >
                <div className='border rounded'>
                    <img className='rounded-t-2 h-60 w-full' src="16.jpg" alt="" />
                    <h2 className='font-medium ms-3 mt-4 mb-1'>Detailed Footage Reveals What Triggers Lightning</h2>
                    <div className='flex text-[12px] items-center mx-3 my-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div><p className='mx-1'>September 1, 2023</p>
                        </div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                        </div>
                        <div>
                            <p className='ms-1'>News</p>
                        </div>
                    </div>
                    <p className='mx-3 text-[14px] pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore...</p>
                </div>
                <div className='border rounded'>
                    <img className='rounded-t-2 h-60 w-full' src="17.jpg" alt="" />
                    <h2 className='font-medium ms-3 mt-4 mb-1'>Detailed Footage Reveals What Triggers Lightning</h2>
                    <div className='flex text-[12px] items-center mx-3 my-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div><p className='mx-1'>September 1, 2023</p>
                        </div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                        </div>
                        <div>
                            <p className='ms-1'>News</p>
                        </div>
                    </div>
                    <p className='mx-3 text-[14px] pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore...</p>
                </div>
                <div className='border rounded'>
                    <img className='rounded-t-2 h-60 w-full' src="18.jpg" alt="" />
                    <h2 className='font-medium ms-3 mt-4 mb-1'>Detailed Footage Reveals What Triggers Lightning</h2>
                    <div className='flex text-[12px] items-center mx-3 my-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div><p className='mx-1'>September 1, 2023</p>
                        </div>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                        </div>
                        <div>
                            <p className='ms-1'>News</p>
                        </div>
                    </div>
                    <p className='mx-3 text-[14px] pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, labore...</p>
                </div>

            </Carousel>
        </div>
    );
};

export default Blog;

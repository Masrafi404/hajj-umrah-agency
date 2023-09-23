import React from 'react';

const Offer = () => {
    return (
        <div className='bg-gray-100 mt-8 ps-4 md:flex justify-evenly'>
            <div className='py-16 md:ms-20'>
                <h3 className='text-[13px] uppercase font-medium text-yellow-300'>featured</h3>
                <h1 className='text-xl font-medium my-2'>What Do We Offer?</h1>
                <p className='text-sm me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <div className='mt-3 mb-4'>
                    <button className='text-[10px] font-semibold bg-yellow-400 py-4 px-4 rounded-3xl ms-2'>APPLY NOW</button>
                    <button className='text-[10px] font-semibold ms-4'>READ MORE</button>
                </div>
                <div className='space-y-4 ms-4'>
                    <div className='flex'>
                        <img className='w-16' src="offer1.png" alt="" />
                        <div className='ms-3'>
                            <h2 className='font-medium'>Free Luggage</h2>
                            <p className='text-sm'>Responsive Lorem Ipsum used since the 1500s is reproduced below.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='w-14 h-16' src="offer2.png" alt="" />
                        <div className='ms-4'>
                            <h2 className='font-medium'>Customer Support</h2>
                            <p className='text-sm'>Responsive Lorem Ipsum used since the 1500s is reproduced below.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='w-14 h-16' src="offer3.png" alt="" />
                        <div className='ms-4'>
                            <h2 className='font-medium'>5 Star Hotel</h2>
                            <p className='text-sm'>Responsive Lorem Ipsum used since the 1500s is reproduced below.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='w-14' src="offer4.png" alt="" />
                        <div className='ms-4'>
                            <h2 className='font-medium'>Hajj Tour</h2>
                            <p className='text-sm'>Responsive Lorem Ipsum used since the 1500s is reproduced below.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ms-[19%] hidden md:inline-block'>
                <img className='h-[39rem] w-[90rem] pe-20' src="image6.jpg" alt="" />
            </div>
        </div>
    );
};

export default Offer;
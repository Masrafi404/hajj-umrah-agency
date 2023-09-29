import React from 'react';

const HajjUmrah = () => {
    return (
        <div className='my-16 md:flex md:mx-20 justify-center items-center'>
            <img className='md:me-20' src="hajj-umrah.png" alt="" />
            <div className='ms-4'>
                <h3 className='text-[13px] uppercase font-medium text-yellow-300'>featured</h3>
                <h1 className='text-xl font-medium my-2'>Hajj & Umrah Package</h1>
                <p className='text-sm mb-3 me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                <div className='space-y-3'>
                    <div className='flex items-center'>
                        <div className='font-bold text-blue-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm ms-[5px]'>Enhanced Features for High-Quality 360 Content</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='font-bold text-blue-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm ms-[5px]'>Always Stay Connected with 360 Social Live Broadcast</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='font-bold text-blue-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm ms-[5px]'>
                                Expanded Compatibility for More 360 Experiences</p>
                        </div>
                    </div>
                </div>



                <div className='mt-3 mb-4'>
                    <button className='text-[10px] font-semibold bg-slate-200 py-4 px-4 rounded-3xl ms-2'>APPLY NOW</button>
                    <button className='text-[10px] font-semibold ms-4'>READ MORE</button>
                </div>
            </div>
        </div>
    );
};

export default HajjUmrah;
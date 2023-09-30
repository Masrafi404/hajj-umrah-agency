import React from 'react';

const Offer = () => {
    return (
        <div className='bg-gray-100 mt-8 ps-4 md:flex justify-evenly'>
            <div className='py-16 md:ms-20'>
                <h3 className='text-[13px] uppercase font-medium text-yellow-300'>featured</h3>
                <h1 className='text-xl font-medium my-2'>What Do We Offer?</h1>
                <div className='space-y-3'>
                    <div className='flex items-center'>
                        <div className='font-bold text-blue-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm ms-[5px]'>All airlines ticket</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='font-bold text-blue-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm ms-[5px]'>Visa processing (saudi Aravia, India and Europe)</p>
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
                                Student visa processing</p>
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
                                Visit visa processing</p>
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
                                Family visa processing</p>
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
                                passport online processing</p>
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
                                Manpower clearance</p>
                        </div>
                    </div>
                </div>
                <div className='mt-3 mb-4'>
                    <button className='text-[10px] font-semibold bg-yellow-400 py-4 px-4 rounded-3xl ms-2'>APPLY NOW</button>
                    <button className='text-[10px] font-semibold ms-4'>READ MORE</button>
                </div>
            </div>
            <div className='ms-[19%] hidden md:inline-block'>
                <img className='h-[31.2rem] w-[40rem] pe-20' src="image6.jpg" alt="" />
            </div>
        </div>
    );
};

export default Offer;
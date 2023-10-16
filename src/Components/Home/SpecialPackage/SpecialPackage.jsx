import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import ReactStars from "react-rating-stars-component";

const SpecialPackage = () => {

    const [showModal, setShowModal] = React.useState(false);

    return (
        <div className='w-[96%] mx-auto mt-8'>
            <p className='uppercase font-semibold text-[.7rem] sm:text-[1rem] text-center text-yellow-400'>special offer</p>
            <p className='font-bold md:text-[1.7rem] text-[1.5rem] sm:mx-4 text-center'>Solution for The Hajj and Umrah</p>

            <div className='md:flex justify-center space-x-4 space-y-4 md:space-y-0 mt-3'>
                <div className='border rounded'>
                    <img className='' src="image3.jpg" alt="" />
                    <h2 className='ms-2 mt-3 mb-2 text-lg font-[500]'>Hajj Package</h2>
                    <div>
                        <div>
                            <div className='flex ms-2'>
                                <img className='w-12 h-14' src="hotel-1.png" alt="" />
                                <div>
                                    <div className=' ms-4 flex items-center space-x-10'>
                                        <div> <p className='uppercase text-[11px] font-semibold ms'>macca</p></div>
                                        <div><p className='uppercase text-[11px]  font-medium'>
                                            <ReactStars
                                                count={5}
                                                size={24} />
                                        </p></div>
                                        <div><p className='uppercase text-[11px] font-medium'>(Quard room)</p></div>
                                    </div>
                                    <p className='ms-4 text-blue-800 text-[12px] font-medium'>200 M To Masjidul Haram</p>
                                </div>
                            </div>
                            <div className='flex ms-2 mt-4'>
                                <img className='w-12 h-14' src="hotel-2.png" alt="" />
                                <div>
                                    <div className=' ms-4 flex items-center space-x-10'>
                                        <div> <p className='uppercase text-[11px] font-medium ms'>macca</p></div>
                                        <div><p className='uppercase text-[11px]  font-medium'>
                                            <ReactStars
                                                count={5}
                                                size={24} />
                                        </p></div>
                                        <div><p className='uppercase text-[11px] font-medium'>(Quard room)</p></div>
                                    </div>
                                    <p className='ms-4 text-blue-800 text-[12px] font-medium'>200 M To Nabawi Mosque</p>
                                </div>
                            </div>
                            <div className='text-sm flex space-x-2 ms-2 mt-4'><p className='text-blue-800 font-[500]'>Price:</p> <del className='text-slate-500'>16.000USD</del> <p className='text-blue-800 font-semibold'>15.000USD</p></div>
                            <div className='mt-3 mb-4'>
                                <button className='text-[10px] font-semibold bg-slate-200 py-4 px-4 rounded-3xl ms-2'>APPLY NOW</button>
                                <button className='text-[10px] font-semibold ms-4'>READ MORE</button>
                            </div>
                            <div className='border-t'>
                                <p className='text-[12px] font-semibold ms-2 mt-3'>Booked: 100/150</p>
                                <ProgressBar
                                    className='mx-2 mt-1'
                                    completed={100}
                                    bgColor="#eeda1d"
                                    labelAlignment="outside"
                                    transitionTimingFunction="ease-in"
                                    animateOnRender
                                    maxCompleted={150}
                                    customLabel=" "
                                    height="12px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded'>
                    <img className='' src="image11.jpg" alt="" />
                    <h2 className='ms-2 mt-3 mb-2 text-lg font-[500]'>Umrah Package</h2>
                    <div>
                        <div>
                            <div className='flex ms-2'>
                                <img className='w-12 h-14' src="hotel-1.png" alt="" />
                                <div>
                                    <div className=' ms-4 flex items-center space-x-10'>
                                        <div> <p className='uppercase text-[11px] font-semibold ms'>macca</p></div>
                                        <div><p className='uppercase text-[11px]  font-medium'>
                                            <ReactStars
                                                count={5}
                                                size={24} />
                                        </p></div>
                                        <div><p className='uppercase text-[11px] font-medium'>(Quard room)</p></div>
                                    </div>
                                    <p className='ms-4 text-blue-800 text-[12px] font-medium'>200 M To Masjidul Haram</p>
                                </div>
                            </div>
                            <div className='flex ms-2 mt-4'>
                                <img className='w-12 h-14' src="hotel-2.png" alt="" />
                                <div>
                                    <div className=' ms-4 flex items-center space-x-10'>
                                        <div> <p className='uppercase text-[11px] font-medium ms'>macca</p></div>
                                        <div><p className='uppercase text-[11px]  font-medium'>
                                            <ReactStars
                                                count={5}
                                                size={24} />
                                        </p></div>
                                        <div><p className='uppercase text-[11px] font-medium'>(Quard room)</p></div>
                                    </div>
                                    <p className='ms-4 text-blue-800 text-[12px] font-medium'>200 M To Nabawi Mosque</p>
                                </div>
                            </div>
                            <div className='text-sm flex space-x-2 ms-2 mt-4'><p className='text-blue-800 font-[500]'>Price:</p> <del className='text-slate-500'>16.000USD</del> <p className='text-blue-800 font-semibold'>15.000USD</p></div>
                            <div className='mt-3 mb-4'>
                                <button className='text-[10px] font-semibold bg-slate-200 py-4 px-4 rounded-3xl ms-2'>APPLY NOW</button>
                                <button className='text-[10px] font-semibold ms-4'>READ MORE</button>
                            </div>
                            <div className='border-t'>
                                <p className='text-[12px] font-semibold ms-2 mt-3'>Booked: 100/150</p>
                                <ProgressBar
                                    className='mx-2 mt-1'
                                    completed={100}
                                    bgColor="#eeda1d"
                                    labelAlignment="outside"
                                    transitionTimingFunction="ease-in"
                                    animateOnRender
                                    maxCompleted={150}
                                    customLabel=" "
                                    height="12px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border rounded'>
                    <img className='h-[46.4%] w-[100%]' src="image4.jpg" alt="" />
                    <h2 className='ms-2 mt-3 mb-2 text-lg font-[500]'>Ramadan Package</h2>
                    <div>
                        <div>
                            <div className='flex ms-2'>
                                <img className='w-12 h-14' src="hotel-1.png" alt="" />
                                <div>
                                    <div className=' ms-4 flex items-center space-x-10'>
                                        <div> <p className='uppercase text-[11px] font-semibold ms'>macca</p></div>
                                        <div><p className='uppercase text-[11px]  font-medium'>
                                            <ReactStars
                                                count={5}
                                                size={24} />
                                        </p></div>
                                        <div><p className='uppercase text-[11px] font-medium'>(Quard room)</p></div>
                                    </div>
                                    <p className='ms-4 text-blue-800 text-[12px] font-medium'>200 M To Masjidul Haram</p>
                                </div>
                            </div>
                            <div className='flex ms-2 mt-4'>
                                <img className='w-12 h-14' src="hotel-2.png" alt="" />
                                <div>
                                    <div className=' ms-4 flex items-center space-x-10'>
                                        <div> <p className='uppercase text-[11px] font-medium ms'>macca</p></div>
                                        <div><p className='uppercase text-[11px]  font-medium'>
                                            <ReactStars
                                                count={5}
                                                size={24} />
                                        </p></div>
                                        <div><p className='uppercase text-[11px] font-medium'>(Quard room)</p></div>
                                    </div>
                                    <p className='ms-4 text-blue-800 text-[12px] font-medium'>200 M To Nabawi Mosque</p>
                                </div>
                            </div>
                            <div className='text-sm flex space-x-2 ms-2 mt-4'><p className='text-blue-800 font-[500]'>Price:</p> <del className='text-slate-500'>16.000USD</del> <p className='text-blue-800 font-semibold'>15.000USD</p></div>
                            <div className='mt-3 mb-4'>
                                <button className='text-[10px] font-semibold bg-slate-200 py-4 px-4 rounded-3xl ms-2'>APPLY NOW</button>
                                <button className='text-[10px] font-semibold ms-4'>READ MORE</button>
                            </div>
                            <div className='border-t'>
                                <p className='text-[12px] font-semibold ms-2 mt-3'>Booked: 100/150</p>
                                <ProgressBar
                                    className='mx-2 mt-1'
                                    completed={100}
                                    bgColor="#eeda1d"
                                    labelAlignment="outside"
                                    transitionTimingFunction="ease-in"
                                    animateOnRender
                                    maxCompleted={150}
                                    customLabel=" "
                                    height="12px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SpecialPackage;
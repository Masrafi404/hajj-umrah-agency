import React from 'react';
import { useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';

const PersonPackage = () => {

    const [hajj, setHajj] = useState([]);
    const [umrah, setUmrah] = useState([]);



    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false)

    useEffect(() => {
        fetch('https://assaignment-11-backend-server.vercel.app/hajj')
            .then((res) => res.json())
            .then((data) => {
                data.map(dt => setHajj(dt))
            })
            .catch((error) => {
                console.error('Error fetching hajj info:', error);
            });
    }, []);

    useEffect(() => {
        fetch('https://assaignment-11-backend-server.vercel.app/umrah')
            .then((res) => res.json())
            .then((data) => {
                data.map(dt => setUmrah(dt))
            })
            .catch((error) => {
                console.error('Error fetching umrah info:', error);
            });
    }, []);

    return (
        <div>
            <h3 className='text-[13px] uppercase font-medium text-yellow-400 text-center'>featured</h3>
            <h1 className='text-xl font-medium my-1 text-center'>Hajj and Umrah Packages</h1>
            <div className='lg:flex lg:mx-20'>
                <div className='lg:w-[100%] lg:mx-10 xl:mx-30 mx-4 border rounded mt-4'>
                    <div className='bg-yellow-500 ps-4 pt-4 pb-9 relative'>
                        <h3 className='font-medium'>Hajj</h3>
                        <p className='text-[13px] text-black'>$8000 USD</p>
                        <button onClick={() => setShowModal(true)} className='uppercase text-[10px] font-medium text-yellow-400 bg-black px-4 py-3 rounded absolute -bottom-5'>get stared</button>
                    </div>
                    <div className='md:space-y-5 space-y-2 pb-5'>

                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj1 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj2 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj3 || 'Land Transportation'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj4 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj5 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj6 || 'Accodomation'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj7 || 'Lunch'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{hajj.Hajj8 || 'Dinner'}</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='lg:w-[100%] lg:mx-10 xl:mx-30 mx-4 border rounded mt-4'>
                    <div className='bg-black ps-4 pt-4 pb-9 relative'>
                        <h3 className='font-medium text-white'>Umrah</h3>
                        <p className='text-[13px] text-yellow-400'>$8000 USD</p>
                        <button onClick={() => setShowModal(true)} className='uppercase text-[10px] font-medium text-yellow-400 bg-slate-200 px-4 py-3 rounded absolute -bottom-5'>get stared</button>
                    </div>
                    <div className='md:space-y-5 space-y-2 pb-5'>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.Umrah1 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.Umrah2 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.umrah3 || 'Land Transportation'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.umrah4 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.Umrah5 || 'Private Airport Transfers'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.Umrah6 || 'Accodomation'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.Umrah7 || 'Lunch'}</p>
                            </div>
                        </div>
                        <div className='flex items-center ms-4 mt-10'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-blue-700 border rounded-full p-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div>
                                <p className='text-sm ms-2'>{umrah.Umrah8 || 'Dinner'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal onClose={handleClose} visible={showModal} />
        </div>
    );
};

export default PersonPackage;


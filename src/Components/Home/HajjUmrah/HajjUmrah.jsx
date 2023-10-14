import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const HajjUmrah = () => {

    const [info, setInfo] = useState([]);
    console.log(info)
    useEffect(() => {
        fetch('http://localhost:3000/personal')
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching contact info:', error);
            });
    }, []);

    return (
        <div className='my-16 md:flex md:mx-20 justify-center items-center'>
            <img className='md:me-20' src="hajj-umrah.png" alt="" />
            <div className='ms-4'>
                <h3 className='text-[13px] uppercase font-medium text-yellow-300'>featured</h3>
                <h1 className='text-xl font-medium my-2'>Hajj & Umrah Processing</h1>
                <p className='mb-3 me-4'>Regularly you also join our Hajj and Umrah Groups.</p>


                <div className='space-y-3'>
                    <div className=''>
                        {
                            info?.map(dt =>
                                <div key={dt._id}>
                                    <p className='text-[18px]'>{dt.name || 'Redowanul Islam Khokan'}</p>
                                    <div className='flex items-center'>
                                        <div className='me-2'>
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                        </div>
                                        <p className='me-2'>{dt.whatsapp || '01873831974'}</p>
                                    </div>
                                </div>
                            )
                        }
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
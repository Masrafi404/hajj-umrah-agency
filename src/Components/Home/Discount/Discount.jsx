import React from 'react';

const Discount = () => {
    return (
        <div className='bg-slate-200 py-4 mt-8'>
            <div>
                <div className='bg-yellow-500 mx-4 py-3 rounded-t-md'>
                    <h2 className='text-center'>Apply Now</h2>
                    <h1 className='text-center font-medium'>Up 10% Discount*</h1>
                </div>
                <div className='mx-4 pb-5 bg-white rounded-b-md'>
                    <input className='mt-6 ps-3 text-[12px] border w-[90%] mx-4 rounded-2xl h-9' placeholder='First Name' type="text" name="" id="" />
                    <input className='mt-5 ps-3 text-[12px] border w-[90%] mx-4 rounded-2xl h-9' placeholder='Last Name' type="text" name="" id="" />
                    <input className='mt-5 ps-3 text-[12px] border w-[90%] mx-4 rounded-2xl h-9' placeholder='Email' type="text" name="" id="" />
                    <input className='mt-5 ps-3 text-[12px] border w-[90%] mx-4 rounded-2xl h-9' placeholder='Number' type="text" name="" id="" />
                    <div className='text-center mt-4'>
                        <button className='text-[10px] font-semibold bg-slate-300 py-4 px-4 rounded-3xl ms-2'>APPLY NOW</button>
                    </div>
                </div>
            </div>
            <div className='ms-6'>
                <h4 className='uppercase text-[10px] font-medium text-yellow-400 mt-3'>apply</h4>
                <h1 className='font-medium mt-1 text-lg'>Apply your Hajj and Umrah</h1>
                <h1 className='font-medium'>and Get 10% Discount</h1>
                <p className='text-sm mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='space-y-2 mt-5 mb-1'>
                    <div className='flex'>
                        <img className='w-5 bg-yellow-400 ps-[0.27rem] pe-[0.31rem] py-[0.28rem] rounded-full' src="1.png" alt="" />
                        <div>
                            <p className='text-[13px] font-medium ms-1.5'>Register here</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='w-5 bg-yellow-400 ps-[0.27rem] pe-[0.31rem] py-[0.28rem] rounded-full' src="2.png" alt="" />
                        <div>
                            <p className='text-[13px] font-medium ms-1.5'>Fill in your details</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='w-5 bg-yellow-400 ps-[0.27rem] pe-[0.31rem] py-[0.28rem] rounded-full' src="3.png" alt="" />
                        <div>
                            <p className='text-[13px] font-medium ms-1.5'>Wait our call</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className='w-5 bg-yellow-400 ps-[0.27rem] pe-[0.31rem] py-[0.28rem] rounded-full' src="4.png" alt="" />
                        <div>
                            <p className='text-[13px] font-medium ms-1.5'>Go Hajj and Umrah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;
import moment from 'moment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [info, setInfo] = useState([]);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    fetch('http://localhost:3000/personal')
        .then((res) => res.json())
        .then((data) => {
            setInfo(data);
            console.log(data)
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });


    return (
        <div className=''>
            <div className=''>
                <div className='md:flex md:justify-between items-center bg-black px-6 py-8'>
                    <div className='hidden md:inline-block'>
                        <div className='flex items-center text-[15px]'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white font-[1000]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className='text-white ms-1'>MON-SAT: 6.00 AM - 10.00 PM</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-white text-[14px] ms-5'>SUN: CLOSED</p>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-center text-white md:text-4xl font-bold text-2xl'>Janani Travel Agency</h1>

                        <h1 className='hidden md:inline-block text-center text-white text-2xl font-medium'>Government approved travel agent</h1>
                    </div>
                    <div className='md:flex md:items-center hidden'>
                        <button className="text-white text-lightBlue-400 shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                            <i className="fa fa-twitter"></i>
                        </button>
                        <button className="text-white  shadow-lg font-normal h-8 w-8 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                            <i className="fa fa-facebook"></i>
                        </button>
                        <button className="text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                            <i className="fa fa-instagram"></i>
                        </button>
                        <Link to="https://github.com/Masrafi404/hajj-umrah-agency">
                            <button className="text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none" type="button">
                                <i className="fa fa-github"></i>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='bg-yellow-400 py-2 md:px-56 px-4'>


                    <ul className="text-black font-medium md:flex justify-evenly text-sm mx-30% py-3 hidden sm:flex mx-[30%]">
                        <li className="uppercase"><Link to="/">home</Link></li>

                        <li className="uppercase"><Link>package</Link></li>
                        <li className="uppercase"><Link>contact</Link></li>
                    </ul>


                    <span className='inline-block sm:hidden'>
                        {isOpen ? (
                            <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </span>
                </div>
                {isOpen && (
                    <ul className="text-black font-medium text-sm bg-white ps-3 py-2">
                        <li className="uppercase hover:text-yellow-400 "><Link to="/">home</Link></li>

                        <li className="uppercase hover:text-yellow-400 "><Link>package</Link></li>
                        <li className="uppercase hover:text-yellow-400 "><Link>contact</Link></li>
                    </ul>
                )}
            </div>
            {
                info?.map(dt => <div key={dt._id} className="bg-[#000] pb-7 pt-16">

                    <section>
                        <div className="md:flex items-center md:justify-center md:mx-32">
                            <div className="">
                                <img data-aos="zoom-in-up" className="w-[850px] rounded" src={dt?.imageURL || 'profile.jpg'} alt="" />
                            </div>
                            <div
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000"
                                className="mx-10 text-white">
                                <h1 className='text-[25px] font-medium mt-4'>Hello it's<span className='text-yellow-400 ms-2'>Me</span></h1>
                                <h3 className='text-[30px]'> {dt?.name || 'Redowanul Islam Khokan'}</h3>
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, reprehenderit rem? Fugiat soluta esse eos tempora quia aspernatur! Omnis, quam.</p>
                                <div className='mt-2'>
                                    <a target='_blank' href={dt?.facebook || 'https://www.facebook.com/profile.php?id=100095284788408'} rel="noreferrer">
                                        <button className="bg-black text-yellow-300 border-yellow-300 border-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                            <i className="fa fa-facebook"></i>
                                        </button>
                                    </a>

                                    <a target='_blank' href={dt?.whatsapp} rel="noreferrer">
                                        <button className="bg-black text-yellow-300 border-yellow-300 border-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                            <i className="fa fa-whatsapp"></i>
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"
                        className='my-10 text-white'>
                        <h1 className='text-[25px] font-medium text-center mb-3'>About<span className='text-yellow-400 ms-2'>Me</span></h1>
                        <div className='md:mx-96 mx-8'>
                            <p>
                                {dt?.about || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repellat labore officia illum vero itaque dicta harum, sapiente tenetur omnis recusandae officiis veritatis doloribus quis non repellendus dolore, reiciendis fugiat minus, esse in ratione? Voluptatem officiis ad odio quos doloremque totam placeat sed, eveniet, in asperiores error, commodi suscipit veniam iure consectetur sint nam tempora deserunt accusantium vitae fugit architecto. Doloremque earum veritatis distinctio assumenda reprehenderit nihil velit eos neque repudiandae sequi! Iste deserunt adipisci facilis nam expedita porro sit sequi facere consequatur, nostrum qui corrupti dicta beatae nisi provident veritatis dolorum illo quia impedit necessitatibus delectus quasi molestias quaerat!'}
                            </p>
                        </div>
                    </section>
                </div>)
            }
            <footer className="relative bg-black pt-8 pb-6 border-t-2">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-4/12 px-4">
                            <h4 className="text-3xl font-semibold text-white mb-2">Let's keep in touch!</h4>
                            <h5 className="text-bold mt-0 text-white">
                                Head Office: B.K Tower, Lalcand Road. Cocbajar, Chtiagang
                            </h5>
                            <p className=" text-white mb-3">First Security Islami Bank Ground Floor.</p>
                            <h5 className="text-bold mt-0 text-white">
                                Branch Office: Eden Garden City (Sonali Bank Ground Floor)
                            </h5>
                            <p className="mt-0 text-white">Cross Laldighi, Cox's Bazar Sadar.</p>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-black text-yellow-300 border-yellow-300 border text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fa fa-twitter"></i>
                                </button>
                                <button className="bg-black text-yellow-300 border-yellow-300 border text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fa fa-facebook"></i>
                                </button>
                                <button className="bg-black text-yellow-300 border-yellow-300 border shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fa fa-instagram"></i>
                                </button>
                                <Link to="https://github.com/Masrafi404/hajj-umrah-agency">
                                    <button className="bg-black text-yellow-300 border-yellow-300 border shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                        <i className="fa fa-github"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12 px-2">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-3/12 px-4 ml-auto">
                                    <span className="block uppercase hover:text-yellow-300 text-white text-base font-semibold mb-2">Contact Info</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm ">+8801811161863</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">+8801976142447</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">+8801976142440</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block text-sm mb-3">jananitravelagency46@gmail.com</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">mdkokhan831974@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 ml-auto">
                                    <span className="block uppercase hover:text-yellow-300 text-white text-base font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">Github</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm mb-3">Free Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-3/12 px-4">
                                    <span className="block uppercase hover:text-yellow-300 text-white text-base font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-semibold block pb-2 text-sm" >MIT License</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-semibold block pb-2 text-sm">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-semibold block pb-2 text-sm" >Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-semibold block pb-2 text-sm" >Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blue-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-white font-semibold py-1">
                                Copyright © <span id="get-current-year">
                                    {
                                        moment().format('YYYY')
                                    }
                                </span>
                                <Link href="/" className="hover:text-yellow-300 ms-2">Janani Travel Agency</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
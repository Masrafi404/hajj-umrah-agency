import React, { useContext, useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const { logOut, user } = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
            .then(result => {
                console.log(result.user);
                toast.success('LogOut Success', {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch(error => {
                const errorMessage = error.message;
            });
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                autoDisplay: true,
            },
            'google_translate_element'
        );
    };

    useEffect(() => {
        var addScript = document.createElement('script');
        addScript.setAttribute(
            'src',
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;

        // Fetch user data here within the useEffect
        fetch('http://localhost:3000/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []); // Empty dependency array to ensure this effect runs only once

    const currentUser = users.find(userData => userData?.email === user?.email);

    console.log(currentUser)
    return (
        <div className='relative'>
            <div className='w-[94%] md:w-[65%] mx-auto fixed md:top-10 top-5 left-0 right-0 z-10'>
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
                        <div className='flex items-center ms-4'>
                            <div id="google_translate_element">

                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-yellow-400'>

                    <div className={user ? 'flex justify-between md:mx-4 items-center py-1' : 'flex justify-between md:mx-4 items-center py-4'}>
                        <div>
                            {user ? (
                                user.photoURL ? (
                                    <img title={user.displayName} className="w-16 h-16 rounded-full me-4 " src={user?.photoURL} alt="" />
                                ) : (
                                    <img title={user.displayName} className="w-12 h-10 rounded me-4" src="https://i.ibb.co/sKTQF8s/download.png" alt="" />
                                )
                            ) : null}
                        </div>
                        <div>
                            <ul className="text-black mt-[0.60rem] mb-[6px] font-medium md:flex justify-evenly space-x-3 text-sm mx-30% hidden sm:flex mx-[30%]">
                                <li className="uppercase "><Link>home</Link></li>
                                <li className="uppercase "><Link to="about">about</Link></li>
                                <li className="uppercase "><Link>package</Link></li>
                                {
                                    currentUser?.role === 'admin' && <li className="uppercase "><Link to="dashboard">Dashboard</Link></li>
                                }
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
                        <div className="hidden md:inline-block">

                            {user ? (
                                <Link onClick={logOutHandler} className=" bg-black rounded-[50px] px-4 py-2 text-white" to="/">
                                    Log Out
                                </Link>
                            ) : (
                                <>
                                    <Link className=" bg-black rounded-[50px] px-4 py-2 text-white" to="/login">
                                        Login
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>


                </div>
                {isOpen && (
                    <ul className="text-black font-medium text-sm bg-white space-y-1 ps-3 py-2">
                        <li className="uppercase hover:text-yellow-400"><Link>home</Link></li>
                        <li className="uppercase hover:text-yellow-400"><Link to="/about">about</Link></li>
                        <li className="uppercase hover:text-yellow-400"><Link>package</Link></li>
                        {
                            currentUser?.role === 'admin' && <li className="uppercase "><Link to="dashboard">Dashboard</Link></li>
                        }
                    </ul>
                )}
            </div>

            <Carousel className='text-center' showArrows={true}>
                <div className='relative'>
                    <img src="image1.jpg" />
                    <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                        <p className='font-bold md:text-[1.7rem] text-[1.5rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="image11.jpg" />
                    <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                        <p className='font-bold md:text-[1.7rem] text-[1.5rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="image4.jpg" />
                    <div className='absolute md:bottom-96 bottom-14 left-0 right-0 z-10 text-white'>
                        <p className='font-bold md:text-[1.7rem] text-[1.5rem] sm:mx-4'>Solution for The Hajj and Umrah</p>
                        <button className='uppercase text-[13px] text-black bg-yellow-300 px-5 py-3 rounded-3xl'>apply now</button>
                    </div>
                </div>
            </Carousel>
            <ToastContainer />
        </div>
    );
};

export default Navbar;

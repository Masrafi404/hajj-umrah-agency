import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment/moment';


const Footer = () => {
    return (
        <footer className="relative bg-black pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
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
                    <div className="w-full lg:w-6/12 px-2">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
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
                            <div className="w-full lg:w-4/12 px-4">
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
                            <Link href="/" className="hover:text-yellow-300 ms-2">Al-Azwa</Link>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

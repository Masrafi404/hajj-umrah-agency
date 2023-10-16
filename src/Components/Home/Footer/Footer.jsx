import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import moment from 'moment';


const Footer = () => {


    const [info, setInfo] = useState([]);
    console.log(info)
    useEffect(() => {
        fetch('https://assaignment-11-backend-server.vercel.app/contact')
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching contact info:', error);
            });
    }, []);


    return (
        <footer className="relative bg-black pt-8 pb-6">
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
                            <Link to="https://github.com/Masrafi404/hajj-umrah-agency" target="_blank">
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



                                {
                                    info?.map(dt => <ul key={dt._id}>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">
                                                {dt.contact1}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">
                                                {dt.contact2}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">
                                                {dt.contact3}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">
                                                {dt.contact4}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">
                                                {dt.contact5}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-blue-100 hover:text-yellow-300 font-normal block pb-2 text-sm">
                                                {dt.contact6}
                                            </a>
                                        </li>
                                    </ul>)
                                }

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
    );
};

export default Footer;

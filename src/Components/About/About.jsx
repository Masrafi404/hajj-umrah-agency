import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ReactWhatsapp from 'react-whatsapp';

AOS.init();

const About = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('https://assaignment-11-backend-server.vercel.app/personal')
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                console.log(data)
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, [])


    return (
        <div className='mb-[1px]'>
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
                                <p className=''>I'm a Businessman, Social Worker and Legal Practitioner</p>
                                <div className='mt-2'>
                                    <a target='_blank' href={dt?.facebook || 'https://www.facebook.com/profile.php?id=100095284788408'} rel="noreferrer">
                                        <button className="bg-black text-yellow-300 border-yellow-300 border-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                            <i className="fa fa-facebook"></i>
                                        </button>
                                    </a>
                                    <ReactWhatsapp number={dt?.whatsapp} message="Assalamu Alikum">
                                        <button className="bg-black text-yellow-300 border-yellow-300 border-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                            <i className="fa fa-whatsapp"></i>
                                        </button>
                                    </ReactWhatsapp>

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
        </div>
    );
};

export default About;
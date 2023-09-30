import React from 'react';

const About = () => {
    return (
        <div className="bg-[#212020] pb-7 pt-16">

            <section>
                <div className="md:flex md:items-center md:justify-center md:mx-32">
                    <div className="">
                        <img className="w-[850px] rounded" src="profile.jpg" alt="" />
                    </div>
                    <div className="md:mt-40 mt-10 mx-10 text-white">
                        <h1 className='text-[25px] font-medium'>Hello it's<span className='text-yellow-400 ms-2'>Me</span></h1>
                        <h3 className='text-[22px]'>Johnathan Vics.</h3>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, reprehenderit rem? Fugiat soluta esse eos tempora quia aspernatur! Omnis, quam.</p>
                        <div className='mt-2'>
                            <button className="bg-black text-yellow-300 border-yellow-300 border-2 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fa fa-facebook"></i>
                            </button>

                            <button className="bg-black text-yellow-300 border-yellow-300 border-2 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                <i className="fa fa-whatsapp"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-10 text-white'>
                <h1 className='text-[25px] font-medium text-center mb-3'>About<span className='text-yellow-400 ms-2'>Me</span></h1>
                <div className='md:mx-96 mx-8'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem quod, quis iure ea debitis dicta asperiores impedit, velit a reprehenderit error voluptate laborum nisi odio aperiam officia nihil repellendus voluptates numquam, ad aut. Voluptatum maxime atque odit temporibus praesentium dolorem officia, tempora, aut facere quis amet debitis officiis? Recusandae magni corporis id tempore sit cupiditate enim quis blanditiis dolorum nobis quam reiciendis sunt animi necessitatibus ratione error excepturi delectus quo repellat vel vero, quod amet! Quasi dolorum dolor enim unde ipsa at nesciunt laborum, corrupti placeat quia voluptatum id deleniti, quibusdam autem suscipit officia tempora ad, totam minima voluptas.</p>
                </div>
            </section>
        </div>
    );
};

export default About;
import React from 'react';
import Swal from 'sweetalert2';

const PersonalInfo = () => {

    const handlerUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const facebook = form.facebook.value;
        const whatsapp = form.whatsapp.value;
        const about = form.about.value;
        const imageURL = form.imageURL.value;

        const personalInfo = { name, facebook, whatsapp, about, imageURL, };

        fetch('https://assaignment-11-backend-server.vercel.app/personal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personalInfo),
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'personal information successfully update',
            showConfirmButton: false,
            timer: 1500,
        });
        form.reset()
    }

    return (
        <form onSubmit={handlerUpdate} className=''>
            <div className=" w-full border-opacity-50 pt-3">
                <h3 className="my-3 text-3xl text-center font-bold ">Personal Information</h3>
                <div className='flex justify-evenly'>

                </div>
            </div>

            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Name: </span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Facebook: </span>
                </label>
                <input type="url" placeholder="Your Facebook" name="facebook" className="border rounded w-full ps-2 ms-2 py-1" />

            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">WhatsApp: </span>
                </label>
                <input type="text" placeholder="Your WhatsApp" name="whatsapp" className="border rounded w-full ps-2 ms-2 py-1" />

            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">About Info: </span>
                </label>
                <textarea name='about' className="border rounded w-full h-[100px] ps-2 ms-2 py-1"></textarea>

            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Image: </span>
                </label>
                <input type="text" placeholder="Your Photo URL" name="imageURL" className="border rounded w-full ps-2 ms-2 py-1" />

            </div>
            <div className="px-6 mb-4 mt-6 mx-[36%]">
                <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Update" />
            </div>
        </form>
    );
};

export default PersonalInfo;
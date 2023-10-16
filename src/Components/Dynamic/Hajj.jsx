import React from 'react';
import Swal from 'sweetalert2';

const Hajj = () => {

    const handlerUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const Hajj1 = form.Hajj1.value;
        const Hajj2 = form.Hajj2.value;
        const Hajj3 = form.Hajj3.value;
        const Hajj4 = form.Hajj4.value;
        const Hajj5 = form.Hajj5.value;
        const Hajj6 = form.Hajj6.value;
        const Hajj7 = form.Hajj7.value;
        const Hajj8 = form.Hajj8.value;

        const personalInfo = { Hajj1, Hajj2, Hajj3, Hajj4, Hajj5, Hajj6, Hajj7, Hajj8 };

        fetch('https://assaignment-11-backend-server.vercel.app/hajj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personalInfo),
        });

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Hajj information successfully update',
            showConfirmButton: false,
            timer: 1500,
        });
        form.reset()
    }

    return (
        <form onSubmit={handlerUpdate} className=''>
            <div className=" w-full border-opacity-50 pt-3">
                <h3 className="my-3 text-3xl text-center font-bold ">Hajj Details</h3>
                <div className='flex justify-evenly'>

                </div>
            </div>

            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 1</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj1" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 2</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj2" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 3</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj3" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 4</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj4" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 5</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj5" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 6</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj6" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 7</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj7" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Hajj Details No. 8</span>
                </label>
                <input type="text" placeholder="write package details" name="Hajj8" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4 mt-6 mx-[36%]">
                <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Update" />
            </div>
        </form>
    );
};

export default Hajj;
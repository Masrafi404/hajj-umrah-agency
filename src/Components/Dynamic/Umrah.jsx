import React from 'react';
import Swal from 'sweetalert2';

const Umrah = () => {

    const handlerUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const Umrah1 = form.Umrah1.value;
        const Umrah2 = form.Umrah2.value;
        const Umrah3 = form.Umrah3.value;
        const Umrah4 = form.Umrah4.value;
        const Umrah5 = form.Umrah5.value;
        const Umrah6 = form.Umrah6.value;
        const Umrah7 = form.Umrah7.value;
        const Umrah8 = form.Umrah8.value;

        const personalInfo = { Umrah1, Umrah2, Umrah3, Umrah4, Umrah5, Umrah6, Umrah7, Umrah8 };

        fetch('https://assaignment-11-backend-server.vercel.app/umrah', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personalInfo),
        });

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Umrah information successfully update',
            showConfirmButton: false,
            timer: 1500,
        });
        form.reset()
    }

    return (
        <form onSubmit={handlerUpdate} className=''>
            <div className=" w-full border-opacity-50 pt-3">
                <h3 className="my-3 text-3xl text-center font-bold ">Umrah Details</h3>
                <div className='flex justify-evenly'>

                </div>
            </div>

            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 1</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah1" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 2</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah2" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 3</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah3" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 4</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah4" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 5</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah5" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 6</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah6" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 7</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah7" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Umrah Details No. 8</span>
                </label>
                <input type="text" placeholder="write package details" name="Umrah8" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4 mt-6 mx-[36%]">
                <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Update" />
            </div>
        </form>
    );
};

export default Umrah;
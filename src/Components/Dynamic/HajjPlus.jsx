import React from 'react';
import Swal from 'sweetalert2';

const HajjPlus = () => {

    const handlerUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const HajjPlus1 = form.HajjPlus1.value;
        const HajjPlus2 = form.HajjPlus2.value;
        const HajjPlus3 = form.HajjPlus3.value;
        const HajjPlus4 = form.HajjPlus4.value;
        const HajjPlus5 = form.HajjPlus5.value;
        const HajjPlus6 = form.HajjPlus6.value;
        const HajjPlus7 = form.HajjPlus7.value;
        const HajjPlus8 = form.HajjPlus8.value;

        const personalInfo = { HajjPlus1, HajjPlus2, HajjPlus3, HajjPlus4, HajjPlus5, HajjPlus6, HajjPlus7, HajjPlus8 };

        fetch('http://localhost:3000/hajjPlus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(personalInfo),
        });

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'HajjPlus information successfully update',
            showConfirmButton: false,
            timer: 1500,
        });
        form.reset()
    }

    return (
        <form onSubmit={handlerUpdate} className=''>
            <div className=" w-full border-opacity-50 pt-3">
                <h3 className="my-3 text-3xl text-center font-bold ">HajjPlus Details</h3>
                <div className='flex justify-evenly'>

                </div>
            </div>

            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 1</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus1" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 2</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus2" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 3</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus3" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 4</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus4" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 5</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus5" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 6</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus6" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 7</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus7" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">HajjPlus Details No. 8</span>
                </label>
                <input type="text" placeholder="write package details" name="HajjPlus8" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4 mt-6 mx-[36%]">
                <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Update" />
            </div>
        </form>
    );
};

export default HajjPlus;
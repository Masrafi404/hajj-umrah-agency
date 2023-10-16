import React from 'react';
import Swal from 'sweetalert2';

const Slider = () => {

    const handlerUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const image1 = form.image1.value;
        const image2 = form.image2.value;
        const image3 = form.image3.value;
        const image4 = form.image4.value;
        const image5 = form.image5.value;
        const image6 = form.image6.value;

        const imageInfo = { image1, image2, image3, image4, image5, image6 };

        fetch('https://assaignment-11-backend-server.vercel.app/slider', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(imageInfo),
        });

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Slider information successfully update',
            showConfirmButton: false,
            timer: 1500,
        });
        form.reset()
    }

    return (
        <form onSubmit={handlerUpdate} className=''>
            <div className=" w-full border-opacity-50 pt-3">
                <h3 className="my-3 text-3xl text-center font-bold ">Slider Information</h3>
                <div className='flex justify-evenly'>

                </div>
            </div>

            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Image No. 1</span>
                </label>
                <input type="text" placeholder="Image URL" name="image1" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Image No. 2</span>
                </label>
                <input type="text" placeholder="Image URL" name="image2" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Image No. 3</span>
                </label>
                <input type="text" placeholder="Image URL" name="image3" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Image No. 4</span>
                </label>
                <input type="text" placeholder="Image URL" name="image4" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Image No. 5</span>
                </label>
                <input type="text" placeholder="Image URL" name="image5" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Image No. 6</span>
                </label>
                <input type="text" placeholder="Image URL" name="image6" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4 mt-6 mx-[36%]">
                <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Update" />
            </div>
        </form>
    );
};

export default Slider;
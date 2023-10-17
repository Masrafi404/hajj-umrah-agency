import React from 'react';
import Swal from 'sweetalert2';

const Modal = ({ visible, onClose }) => {

    const handleClose = () => {
        onClose()
    }

    if (!visible) {
        return null;
    }

    const applyHandler = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const about = event.target.about.value;
        const apply = { name, email, number, about }
        console.log(name, email, number, about)
        console.log(apply)
        event.target.reset()
        handleClose()

        fetch('http://localhost:3000/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(apply),
        });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Apply Success',
            showConfirmButton: false,
            timer: 1500,
        });


    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white rounded p-2 relative">
                <form onSubmit={applyHandler} className=''>
                    <div className=" w-full border-opacity-50 pt-3">
                        <h3 className="my-3 text-3xl text-center font-bold ">Write Information</h3>

                    </div>

                    <div className="px-6 mb-3">
                        <label className="label">
                            <span className="label-text">Name: </span>
                        </label>
                        <input type="text" placeholder="Your Name" name="name" className="border rounded w-full ps-2 ms-2 py-1" required />
                    </div>
                    <div className="px-6 mb-3">
                        <label className="label">
                            <span className="label-text">Email: </span>
                        </label>
                        <input type="email" placeholder="Your Email" name="email" className="border rounded w-full ps-2 ms-2 py-1" required />

                    </div>
                    <div className="px-6 mb-3">
                        <label className="label">
                            <span className="label-text">Number </span>
                        </label>
                        <input type="text" placeholder="Your Phone Number" name="number" className="border rounded w-full ps-2 ms-2 py-1" required />

                    </div>
                    <div className="px-6 mb-4">
                        <label className="label">
                            <span className="label-text">About:</span>
                        </label>
                        <textarea placeholder="What You Need?" name="about" className="border rounded w-full ps-2 ms-2 py-1" id="" cols="30" rows="8" required></textarea>
                    </div>
                    <div className="flex justify-center mb-4">
                        <input className='bg-transparent hover:bg-blue-500 text-blue-700 font-normal hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type="submit" value="Apply" />
                    </div>
                </form>
                <button className="close-button absolute top-0 m-2 right-0" onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Modal;
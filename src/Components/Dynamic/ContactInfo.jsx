import React from 'react';

const ContactInfo = () => {

    const handlerUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const contact1 = form.contact1.value;
        const contact2 = form.contact2.value;
        const contact3 = form.contact3.value;
        const contact4 = form.contact4.value;
        const contact5 = form.contact5.value;
        const contact6 = form.contact6.value;

        const contactInfo = { contact1, contact2, contact3, contact4, contact5, contact6 };

        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactInfo),
        });
    }

    return (
        <form onSubmit={handlerUpdate} className=''>
            <div className=" w-full border-opacity-50 pt-3">
                <h3 className="my-3 text-3xl text-center font-bold ">Contact Information</h3>
                <div className='flex justify-evenly'>
                </div>
            </div>

            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Contact No. 1</span>
                </label>
                <input type="text" placeholder="Number/Email" name="contact1" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Contact No. 2</span>
                </label>
                <input type="text" placeholder="Number/Email" name="contact2" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Contact No. 3</span>
                </label>
                <input type="text" placeholder="Number/Email" name="contact3" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Contact No. 4</span>
                </label>
                <input type="text" placeholder="Number/Email" name="contact4" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Contact No. 5</span>
                </label>
                <input type="text" placeholder="Number/Email" name="contact5" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4">
                <label className="label">
                    <span className="label-text">Contact No. 6</span>
                </label>
                <input type="text" placeholder="Number/Email" name="contact6" className="border rounded w-full ps-2 ms-2 py-1" />
            </div>
            <div className="px-6 mb-4 mt-6 mx-[36%]">
                <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Update" />
            </div>
        </form>
    );
};

export default ContactInfo;
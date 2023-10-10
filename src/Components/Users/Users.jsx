import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Assuming you are using SweetAlert2 for notifications

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('http://localhost:3000/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    };

    const handlerMakeAdmin = id => {
        fetch(`http://localhost:3000/users/admin/${id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    fetchUsers(); // Refetch users after making changes
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        // title: `${user.displayName} is now an Admin`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to make user admin!',
                    });
                }
            })
            .catch((error) => {
                console.error('Error making user admin:', error.message);
            });
    };

    const handlerMakeUser = id => {
        fetch(`http://localhost:3000/users/user/${id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    fetchUsers(); // Refetch users after making changes
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        // title: `${user.displayName} is now an user`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to make user user!',
                    });
                }
            })
            .catch((error) => {
                console.error('Error making user admin:', error);
            });
    };

    return (
        <div>
            <div className="p-5 h-screen bg-gray-100">
                <h1 className="text-xl mb-2">All User</h1>

                <div className="overflow-auto rounded-lg shadow hidden md:block">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className=" p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                <th className=" p-3 text-sm font-semibold tracking-wide text-left">Image</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
                                <th className=" p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                                <th className=" p-3 text-sm font-semibold tracking-wide text-left">Role</th>
                            </tr>
                        </thead>
                        {

                            users?.map((user, index) => <tbody key={index} className="divide-y divide-gray-100">
                                <tr className="bg-white">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-500 hover:underline">{index + 1}</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span
                                            className="p-1.5 text-xs font-medium tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{user.email}</span>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{user.displayName}</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">

                                        {
                                            user.role === 'user' ? <button disabled
                                                className={`px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm ${user.role === 'user' ? 'hover:text-blue-500 hover:bg-blue-50 disabled:opacity-50 cursor-not-allowed' : ''}`}

                                            >
                                                User
                                            </button> :
                                                <button onClick={() => handlerMakeUser(user._id)} className="px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                                                    Make User
                                                </button>
                                        }

                                        {
                                            user.role === 'admin' ? <button disabled
                                                className={`ms-4 px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm ${user.role === 'admin' ? 'hover:text-blue-500 hover:bg-blue-50 disabled:opacity-50 cursor-not-allowed' : ''}`}

                                            >
                                                Admin
                                            </button> :
                                                <button onClick={() => handlerMakeAdmin(user._id)} className="ms-4 px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
                                                    Make Admin
                                                </button>
                                        }
                                    </td>

                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const [passEye, setPassEye] = useState(true);
    const [confirmPassEye, setConfirmPassEye] = useState(true);
    const [pass, setPass] = useState('')
    const [coPass, setCoPass] = useState('')
    const [error, setError] = useState('')
    const [isUser, setIsUser] = useState('')
    const { createUser, updateUserProfile, googleSignUp, githubSignUp } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlePassEyeToggle = () => {
        setPassEye(!passEye);
    };

    const handleConfirmPassEyeToggle = () => {
        setConfirmPassEye(!confirmPassEye);
    };
    const signUpHandler = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        const photoURL = event.target.image.value
        console.log(name, email, password, confirmPassword, photoURL)
        console.log(event)

        if (password.length < 6) {
            setPass('Password must be at least 6 characters long')
            return;
        }
        else if (password !== confirmPassword) {
            setCoPass('Confirm Password does not match')
            return;
        }


        createUser(email, password)
            .then((result) => {
                updateUserProfile(name, photoURL)
                const user = result.user
                toast.success('SignUp Success', {
                    position: toast.POSITION.TOP_RIGHT
                })

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                console.log(user)
                event.target.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorMassage = error.message;
                setIsUser(errorMassage)
            })
    }


    const googleSignUpHandler = () => {
        googleSignUp()
            .then(result => {
                const user = result.user
                toast.success('SignUp Success', {
                    position: toast.POSITION.TOP_RIGHT
                })

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const githubSignUpHandler = () => {
        githubSignUp()
            .then(result => {
                const user = result.user
                toast.success('SignUp Success', {
                    position: toast.POSITION.TOP_RIGHT
                })

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                console.log(user)
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className="min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full mx-auto max-w-md shadow-2xl bg-base-100">
                <div className="">
                    <form onSubmit={signUpHandler} className=''>
                        <div className=" w-full border-opacity-50 pt-3">
                            <h3 className="my-3 text-3xl text-center font-bold ">Please Register</h3>
                            <div className='flex justify-evenly'>
                                <div onClick={googleSignUpHandler} className='flex justify-center items-center me-3'>
                                    <button className='bg-white btn  hover:bg-white'>
                                        <img className='ms-3 w-10 me-4' src="https://i.ibb.co/hCmDtQt/images-removebg-preview.png" alt="" /><h4 className='text-black'> Google</h4>
                                    </button>
                                </div>
                                <div onClick={githubSignUpHandler} className='flex justify-center items-center me-3'>
                                    <button className='bg-white btn hover:bg-white'>
                                        <img className='ms-3 w-10 me-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZCYmiGYsRcLuenmPaLZRJs2vQMkTK8b4XeoOLpYtGQ&s" alt="" /> <h4 className='text-black'>Github</h4>
                                    </button>
                                </div>
                            </div>
                            <h3 className='ms-8 font-semibold text-red-600'>{error}</h3>
                            <div className="text-center mb-2">OR</div>
                        </div>

                        <div className="px-6 mb-4">
                            <label className="label">
                                <span className="label-text">Name: </span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="border rounded w-full ps-2 ms-2 py-1" required />
                        </div>
                        <div className="px-6 mb-4">
                            <label className="label">
                                <span className="label-text">Email: </span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" className="border rounded w-full ps-2 ms-2 py-1" required />
                            <h3 className='font-semibold text-red-600 mt-2'>{isUser}</h3>
                        </div>
                        <div className="px-6 mb-4 sticky">
                            <label className="label">
                                <span className="label-text">Password: </span>
                            </label>
                            <input
                                type={passEye ? 'text' : 'password'}
                                placeholder="password"
                                name="password"
                                className="border rounded w-full ps-2 ms-2 py-1"
                                required
                            />
                            <div onClick={handlePassEyeToggle} className="absolute left-96 bottom-2">
                                {passEye ? <FaEye /> : <FaEyeSlash />}
                            </div>
                            <h3 className='font-semibold text-red-600 mt-2'>{pass}</h3>
                        </div>
                        <div className="px-6 mb-4 sticky">
                            <label className="label">
                                <span className="label-text">Re Password:</span>
                            </label>
                            <input
                                type={confirmPassEye ? 'text' : 'password'}
                                placeholder="password"
                                name="confirm"
                                className="border rounded w-full ps-2 ms-2 py-1"
                                required
                            />
                            <div onClick={handleConfirmPassEyeToggle} className="absolute left-96 bottom-2">
                                {confirmPassEye ? <FaEye /> : <FaEyeSlash />}
                            </div>
                            <h3 className='font-semibold text-red-600 mt-2'>{coPass}</h3>
                        </div>
                        <div className="flex px-6 mb-4">
                            <label className="label">
                                <span className="label-text">image:</span>
                            </label>
                            <input type="file" placeholder="Your Photo Url" name="image" className="ms-2" />
                        </div>
                        <div className="px-6 mb-4 mt-6 mx-[36%]">
                            <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Sign Up" />
                        </div>
                        <p className='pb-4 text-sm mt-3 ms-1 text-center '>Already Account? <Link to="/login" className='link underline text-blue-600'>Login</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;

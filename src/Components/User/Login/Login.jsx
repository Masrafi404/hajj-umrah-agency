import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const [passEye, setPassEye] = useState(true);
    const [error, setError] = useState('')
    const [viaError, setViaError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { logInUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const handlePassEyeToggle = () => {
        setPassEye(!passEye);
    };
    const loginHandler = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        console.log(event)

        logInUser(email, password)
            .then((logIn) => {
                const user = logIn.user
                toast.success('Login Success', {
                    position: toast.POSITION.TOP_RIGHT
                })
                fetch('https://assaignment-11-backend-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                console.log(user)
                event.target.reset()
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMassage = error.message
                setError(errorMassage)
                console.log(error)
            })
    }

    const googleSignInHandler = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                toast.success('Login Success', {
                    position: toast.POSITION.TOP_RIGHT
                })
                fetch('https://assaignment-11-backend-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(result.user)
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setViaError(error.message)
            })
    }

    const githubSignInHandler = () => {
        githubSignIn()
            .then(result => {
                console.log(result.user)
                toast.success('Login Success', {
                    position: toast.POSITION.TOP_RIGHT
                })
                fetch('https://assaignment-11-backend-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(result.user)
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setViaError(error.message)
            })
    }

    return (
        <div className="min-h-screen bg-base-200">

            <div className="card flex-shrink-0 w-full mx-auto max-w-md shadow-2xl bg-base-100">
                <div className="">
                    <form onSubmit={loginHandler} className=''>
                        <div className=" w-full border-opacity-50 pt-3">
                            <h3 className="my-3 text-3xl text-center font-bold ">Please Login</h3>
                            <div className='flex justify-evenly'>
                                <div onClick={googleSignInHandler} className='flex justify-center items-center me-3'>
                                    <button className='bg-white btn  hover:bg-white'>
                                        <img className='ms-3 w-10 me-4' src="https://i.ibb.co/hCmDtQt/images-removebg-preview.png" alt="" /><h4 className='text-black'> Google</h4>
                                    </button>
                                </div>
                                <div onClick={githubSignInHandler} className='flex justify-center items-center me-3'>
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
                                <span className="label-text">Email: </span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" className="border rounded w-full ps-2 ms-2 py-1" required />

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
                            <h3 className='font-semibold text-red-600 mt-2'>{viaError}</h3>
                        </div>
                        <div className="px-6 mb-4 mt-6 mx-[36%]">
                            <input className='bg-yellow-500 rounded px-2 py-2' type="submit" value="Login" />
                        </div>
                        <p className='pb-4 text-sm mt-3 ms-1 text-center '>New? <Link to="/signUp" className='link underline text-blue-600'>Create and Account</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Login;

import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login Successful!',
                });
                setEmail('');
                setPassword('');
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password. Please try again.',
                });
            })
    }
    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Google Login Successful!',
            });
            setEmail('');
            setPassword('');
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Google Login Failed',
                text: 'Failed to sign in with Google.',
            });
        }
    };

    const handleGithubLogin = async () => {
        try {
            await signInWithGithub();
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'GitHub Login Successful!',
            });
            setEmail('');
            setPassword('');
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'GitHub Login Failed',
                text: 'Failed to sign in with GitHub.',
            });
        }
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-white lg:mt-5 mt-20">
                <div className="container mx-auto my-4 px-4 lg:px-40">
                    <form onSubmit={handleLogin} className="left w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold uppercase text-5xl text-[#E3963E] inline-block">Login Here</h1>
                        </div>
                        <div className=" mt-5">
                            <div className="relative mt-5">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    value={email}
                                    type="email"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Email"
                                    required />
                                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                            </div>


                            <div className="relative mt-5">
                                <input
                                    onChange={(e) => setPassword(e.target.value)} id="pass"
                                    name="password"
                                    value={password}
                                    type="password"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Password"
                                    required />
                                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button className="uppercase mt-5 text-sm font-bold tracking-wide bg-[#E3963E] text-gray-100 p-3 rounded-lg w-full ">
                                Login
                            </button>
                        </div>
                    </form>

                    <div className="right w-full mb-20 lg:mb-0 lg:-mt-64 lg:w-2/6 ml-auto rounded-2xl bg-[url('/stat1.jpg')] bg-cover">
                        <div className="p-6 sm:p-16 bg-opacity-50 rounded-2xl bg-black">
                            <div className="">
                                <h2 className="text-2xl text-white font-bold">Sign in to unlock the <br /> best of Read&Digest.</h2>
                            </div>


                            <div className="mt-16 grid ">
                                <button onClick={handleGoogleLogin} className="group h-12 px-5 lg:-ml-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-8 justify-center">
                                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                        <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                    </div>
                                </button>

                            </div>

                            <div className="mt-10 space-y-4 text-white text-center sm:-mb-8">
                                <p className="text-xs">Don't have an account?<a href="/register" className="underline"> Register</a> here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
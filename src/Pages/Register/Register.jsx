import React from 'react';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../../Components/SocialLogin';
import axios from 'axios';

const imageHostKey = import.meta.env.VITE_imgHost;
const imageApiUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, logOut, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters long.');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter.');
            return;
        }

        if (!/[a-z]/.test(password)) {
            setRegisterError('Password must contain at least one lowercase letter.');
            return;
        }

        setIsLoading(true);
        let imageUrl = '';

        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            try {
                const response = await axios.post(imageApiUrl, formData);
                imageUrl = response.data.data.display_url;
            } catch (error) {
                console.error('Image upload failed:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Image Upload Failed',
                    text: error.message,
                });
                setIsLoading(false);
                return;
            }
        }

        try {
            await createUser(email, password, name, imageUrl);
            const userInfo = {
                name,
                email,
                image: imageUrl,
                role: 'User',
            };
            const res = await axiosPublic.post('/users', userInfo);
            if (res.data.insertedId) {
                logOut();
                navigate('/login');
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Registration Successful!',
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.message,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName,
                };
                axiosPublic.post('/users', userInfo).then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Registration Successful!',
                        });
                        logOut();
                        navigate('/login');
                    }
                });
            });
    };

    return (
        <div>
            <div className="flex justify-center items-center h-screen bg-white lg:mt-5 mt-20">
                <div className="container mx-auto my-4 px-4 lg:px-40">
                    <form
                        onSubmit={handleRegister}
                        className="left w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
                    >
                        <div className="flex">
                            <h1 className="font-bold uppercase text-5xl text-[#E3963E] inline-block">
                                Register Here
                            </h1>
                        </div>
                        <div className="mt-5">
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600"
                                    placeholder="Publisher Name"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-[#E3963E] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                                >
                                    Name
                                </label>
                            </div>
                            <div className="relative mt-5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600"
                                    placeholder="Email"
                                    required
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-[#E3963E] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative mt-5">
                                <label htmlFor="photobutton" className="text-[#E3963E] text-sm">
                                    Your Photo
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    className="block w-full cursor-pointer appearance-none rounded-l-md border-b-2 rounded-lg border-[#E3963E]  bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-[#E3963E] focus:outline-none focus:ring-1 focus:ring-[#E3963E] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="relative mt-5">
                                <input
                                    id="pass"
                                    name="password"
                                    type="password"
                                    className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600"
                                    placeholder="Password"
                                    required
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute left-0 -top-3.5 text-[#E3963E] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-sm"
                                >
                                    Password
                                </label>
                            </div>
                            {registerError && <p className="text-red-600">{registerError}</p>}
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button
                                type="submit"
                                className="uppercase mt-5 text-sm font-bold tracking-wide bg-[#E3963E] text-gray-100 p-3 rounded-lg w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Registering...' : 'Register'}
                            </button>
                        </div>
                    </form>

                    <div className="right w-full mb-20 lg:mb-0 lg:-mt-64 lg:w-2/6 ml-auto rounded-2xl bg-[url('/stat1.jpg')] bg-cover">
                        <div className="p-6 sm:p-16 bg-opacity-50 rounded-2xl bg-black">
                            <div className="text-white rounded shadow-lg">
                                <div className="">
                                    <h2 className="text-2xl text-white font-bold">
                                        Register to unlock the <br /> best of Read&Digest.
                                    </h2>
                                </div>
                                <div className="flex items-center mt-8">
                                    <input id="termsConditions" type="checkbox" required />
                                    <label className="text-s ml-2" htmlFor="termsConditions" />
                                    I agree to the terms and conditions.
                                </div>

                                <button onClick={handleGoogleSignIn}>
                                    <SocialLogin></SocialLogin>
                                </button>
                            </div>
                            <div className="space-y-4 text-white text-center sm:-mb-8">
                                <p className="text-xs mt-5">
                                    Already have an account?
                                    <a href="/login" className="underline">
                                        {' '}
                                        Login
                                    </a>{' '}
                                    here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

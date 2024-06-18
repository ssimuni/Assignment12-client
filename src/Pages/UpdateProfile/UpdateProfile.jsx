import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Profile Updated',
        }).then(() => {
            navigate('/myProfile');
        });
    };
    const { user, updateUserInfo } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhotoURLChange = (e) => {
        setPhotoURL(e.target.value);
    };

    const handleSaveChanges = async () => {
        try {
            await updateUserInfo(name, photoURL);
        } catch (error) {
            console.error('Error updating profile:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Profile Update Failed!',
                text: 'Please try again.',
            });
        }
    };

    return (
        <div className="container mx-auto my-10 border border-blue-gray-700 rounded-lg shadow-lg w-[600px]">
            <h1 className="text-3xl font-bold mb-4 text-center text-[#E3963E] pt-5">Update Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">


                <div className="relative mt-5">
                    <input id="name" name="name" type="text" onChange={handleNameChange} value={name} className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600" placeholder="Title" />
                    <label for="password" className="absolute left-0 -top-3.5  text-sm font-semibold peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm text-[#E3963E]">Name</label>
                    {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                </div>


                <div className="relative mt-8">
                    <input id="name" name="name" type="text" onChange={handlePhotoURLChange} value={photoURL} className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600" placeholder="Title" />
                    <label for="password" className="absolute left-0 -top-3.5 text-[#E3963E] text-sm peer-placeholder-shown:text-base font-semibold peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Profile Picture</label>
                    {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                </div>



                <div className="mt-4">
                    <button
                        className="bg-[#E3963E] text-white px-4 py-2 rounded mx-auto flex mb-2"
                        onClick={handleSaveChanges}
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile
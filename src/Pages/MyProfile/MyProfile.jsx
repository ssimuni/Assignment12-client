import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='flex justify-center items-center min-h-screen bg-cover bg-gradient-to-tr from-transparent via-transparent to-[#E3963E]' style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("stat1.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'full',
            height: '300px',
        }}>
            <div className="card w-96 glass bg-gray text-white">
                <figure><img src={user.photoURL} alt="car" /></figure>
                <div className="card-body font-bold text-center">
                    <h2 className="text-2xl text-center">{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
                <Link to="/update">
                    <button
                        className="bg-[#E3963E] text-white px-4 py-2 rounded-lg mx-auto flex mb-4"
                    >
                        Update Profile
                    </button>
                </Link>

            </div>
        </div >
    );
}

export default MyProfile
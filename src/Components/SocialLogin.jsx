import React from 'react'

const SocialLogin = () => {


    return (
        <div className="mt-16 grid ">
            <button className="group h-12 px-5 lg:-ml-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-orange-500 focus:bg-blue-50 active:bg-blue-100">
                <div className="relative flex items-center space-x-8 justify-center">
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                    <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 sm:text-base">Continue with Google</span>
                </div>
            </button>

        </div>
    )
}

export default SocialLogin
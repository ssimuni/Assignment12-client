import React from 'react'
import { Link, NavLink, Navigate, useLocation } from 'react-router-dom'

const Navbar = () => {


    const location = useLocation();
    console.log(location.pathname);

    const isActive = (path) => {
        return location.pathname === path ? 'text-[#E3963E] font-semibold' : 'text-[#E3963E] font-semibold';

    };

    const navOptions = <>
        <li className='text-[#E3963E] ml-5 pr-6 font-semibold text-base'><NavLink to="/" className={isActive('/')}>Home</NavLink></li>
        <li className='text-[#E3963E] pr-6 font-semibold text-base'><Link to="addArticles" className={isActive('/addArticles')} >Add Articles</Link></li>
        <li className='text-[#E3963E] pr-6 font-semibold text-base'><Link>All Articles</Link></li>
        <li className='text-[#E3963E] pr-6 font-semibold text-base'><Link>Subscription</Link></li>
        <li className='text-[#E3963E] pr-6 font-semibold text-base'><Link>Dashboard</Link></li>
        <li className='text-[#E3963E] pr-6 font-semibold text-base'><Link>My Articles</Link></li>
        <li className='text-[#E3963E] pr-6 font-semibold text-base'><Link>Premium Articles</Link></li>
    </>
    return (
        <div><div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <img src="logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </div></div>
    )
}

export default Navbar
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useUsers from '../../Hooks/useUsers';
import useAdmin from '../../Hooks/useAdmin';
import usePremium from '../../Hooks/usePremium';
import usePublisher from '../../Hooks/usePublisher';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loadingUser, setLoadingUser] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isAdmin] = useAdmin();
    const [isPremium, refetch] = usePremium();
    const [publishers, refetchPublishers] = usePublisher();
    const [users,] = useUsers();
    const location = useLocation();

    const isPublisher = user && publishers.some(publisher => publisher.email === user.email);

    useEffect(() => {
        setLoadingUser(true);
        const timeout = setTimeout(() => {
            setLoadingUser(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    };

    const renderLoggedInNavbar = () => {
        return (
            <div className="flex items-center space-x-4" >
                <div className="relative">
                    <div className="group cursor-pointer">
                        <Link className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                            {loadingUser ? (
                                <div><span className="loading loading-spinner text-info"></span></div>
                            ) : (
                                <div className="dropdown dropdown-end block flex">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="User Avatar"
                                                src={user.photoURL || 'https://via.placeholder.com/150'}
                                                onMouseEnter={() => setIsHovered(true)}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleLogOut}
                                        className="block px-2 bg-red-500 text-white font-bold rounded-lg lg:ml-3"
                                    >
                                        Log out
                                    </button>
                                </div>
                            )}
                            {isHovered && (
                                <div
                                    className="absolute top-10 right-0 bg-white border-2 shadow-lg rounded-lg text-black px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    {loadingUser ? 'Loading....' : user.displayName}
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const renderLoggedOutNavbar = () => {
        return (
            <div className='lg:flex'>
                <Link to="/login">
                    <button className="btn bg-[#E3963E] text-gray-100 hover:bg-orange-500">Log In</button>
                </Link>
                <Link to="/register">
                    <button className="btn ml-5 bg-[#E3963E] text-gray-100 hover:bg-orange-500">Register</button>
                </Link>
            </div>
        );
    };

    const navlinks = (
        <>
            <li className={`pr-3 ml-5 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><NavLink to="/">Home</NavLink></li>
            <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="allArticles">All Articles</Link></li>
            {user && (
                <>
                    <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="addArticles">Add Articles</Link></li>
                    <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="subscription">Subscription</Link></li>
                    {isAdmin && (
                        <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="dashboard/dashboardBase">Dashboard</Link></li>
                    )}

                    {isPremium && (
                        <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="premiumArticles">Premium Articles</Link></li>

                    )}
                    {isPublisher && (
                        <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="publisher">My Growth & History</Link></li>
                    )}
                    <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="myProfile">My Profile</Link></li>
                    <li className={`pr-3 font-semibold text-base ${location.pathname === '/' ? 'text-white' : 'text-[#E3963E]'}`}><Link to="myArticles">My Articles</Link></li>
                </>
            )}
        </>
    );

    return (
        <div className={`navbar bg-cover bg-fixed ${location.pathname === '/' ? 'nav' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className={`btn ${location.pathname === '/' ? 'text-white' : 'text-black'} btn-ghost lg:hidden`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className={`z-50 relative menu menu-sm dropdown-content mt-3 p-2 shadow ${location.pathname === '/' ? 'bg-[#E3963E]' : 'bg-base-100'} rounded-box w-52`}>
                        {navlinks}
                    </ul>
                </div>
                <img className='w-28' src={`${location.pathname === '/' ? '/logoo.png' : '/logo.png'}`} alt="Logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="z-50 relative menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? renderLoggedInNavbar() : renderLoggedOutNavbar()}
            </div>
        </div>
    );
};

export default Navbar;

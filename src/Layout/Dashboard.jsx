import React, { useContext } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'
import { HiHome } from 'react-icons/hi'
import { PiArticleNyTimesFill } from 'react-icons/pi'
import { RiProfileFill } from 'react-icons/ri'
import { NavLink, Outlet } from 'react-router-dom'
import useArticles from '../Hooks/useArticles';
import { AuthContext } from '../Providers/AuthProvider'
import usePublisher from '../Hooks/usePublisher'
import useUsers from '../Hooks/useUsers'
import { BsNewspaper } from 'react-icons/bs'

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [article, refetch] = useArticles();
    const [publishers,] = usePublisher();
    const [users,] = useUsers();
    return (
        <div className='flex'>
            <aside class="flex flex-col w-64 min-h-screen px-4 py-8 overflow-y-auto bg-[#E3963E] border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

                <div class="flex flex-col items-center mt-6 -mx-2">
                    <img class="object-cover w-24 h-24 mx-2 rounded-full" src={user.photoURL} alt="avatar" />
                    <h4 class="mx-2 mt-2 font-bold text-white dark:text-gray-200">{user.displayName}</h4>
                    <p class="mx-2 mt-1 text-sm font-medium text-white dark:text-gray-400">{user.email}</p>
                </div>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav>

                        <NavLink to="/dashboard/allUser">

                            <div class="flex items-center px-4 py-2 mt-3 text-white transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <FaUser class="w-5 h-5"></FaUser>

                                <span class="mx-4 font-medium">All Users</span>
                                <span class="text-right mx-6 font-medium bg-white px-2 rounded-lg text-[#E3963E] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">{users.length}</span>
                            </div>
                        </NavLink>

                        <NavLink to="/dashboard/allArticlesAdmin">

                            <div class="flex items-center px-4 py-2 mt-3 text-white transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <PiArticleNyTimesFill class="w-5 h-5"></PiArticleNyTimesFill>

                                <span class="mx-4 font-medium">All Articles</span>
                                <span class="mx-4 font-medium bg-white text-right px-2 rounded-lg text-[#E3963E] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">{article.length}</span>
                            </div>
                        </NavLink>

                        <NavLink to="/dashboard/addPublisher" >

                            <div class="flex items-center px-4 py-2 mt-3 text-white transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <BsNewspaper class="w-5 h-5"></BsNewspaper>

                                <span class="mx-4 font-medium">Add Publishers</span>
                                <span class="mx-4 font-medium bg-white text-right px-2 rounded-lg text-[#E3963E] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">{publishers.length}</span>
                            </div>
                        </NavLink>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <NavLink to="/">

                            <div class="flex items-center px-4 py-2 mt-5 text-white transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <HiHome class="w-5 h-5"></HiHome>

                                <span class="mx-4 font-medium">Home</span>
                            </div>
                        </NavLink>

                        <NavLink to="/myProfile">

                            <div class="flex items-center px-4 py-2 mt-3 text-white transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                                <CgProfile class="w-5 h-5"></CgProfile>

                                <span class="mx-4 font-medium">My Profile</span>
                            </div>
                        </NavLink>
                    </nav>
                </div>
            </aside>

            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Dashboard
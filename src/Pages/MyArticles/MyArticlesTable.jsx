import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArticlesTable = ({ article, index }) => {
    const { _id, image, title, status, isPremium } = article;
    const { user } = useContext(AuthContext);

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/All-Articles/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Article has been deleted. Reload This page.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>

            <section class="container mx-auto p-6 font-mono">
                <div class="w-full overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <tbody class="bg-white border">
                                <tr class="text-gray-700 w-full">
                                    <td className="text-center px-4 py-3">
                                        {index + 1}
                                    </td>
                                    <td class="px-4 py-3 lg:w-[400px]">
                                        <div class="flex items-center text-sm">
                                            <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                                                <img class="object-cover w-full h-full rounded-full" src={image} alt="" loading="lazy" />
                                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div className=''>
                                                <p class="font-semibold text-black">{title}</p>

                                            </div>
                                        </div>
                                    </td>

                                    <td class="px-4 py-3 text-ms font-semibold lg:w-28">isPremium</td>

                                    <td class="px-4 py-3 text-ms font-semibold lg:w-28">status</td>


                                    <td className="text-xs">
                                        <Link to={`/details/${_id}`} className='mx-auto justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded'>
                                            Details
                                        </Link>
                                    </td>

                                    <td className="text-xs">
                                        <Link to={`/updateMyArticles/${_id}`} className='mx-auto justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded'>
                                            Update
                                        </Link>
                                    </td>

                                    <td class="px-4 py-3 text-xs text-center"><button className='text-center p-2 bg-red-600 text-white justify-center rounded' onClick={() => handleDelete(_id)}>Delete</button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyArticlesTable
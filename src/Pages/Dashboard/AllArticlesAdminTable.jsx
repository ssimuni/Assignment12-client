import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useArticles from '../../Hooks/useArticles';

const AllArticlesAdminTable = ({ article }) => {


    const { _id, image, title, status, isPremium, name, email, photoURL, publisher, postedDate } = article;
    const { user } = useContext(AuthContext);
    const [, refetch] = useArticles();

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
                            refetch();
                        }

                    })
            }
        });
    }


    return (
        <div>

            <div class="w-full mx-auto">
                <div class="container mx-auto mb-5">
                    <div role="list" aria-label="Behind the scenes People " class="place-items-center justify-center flex">
                        <div role="listitem" class="relative mt-20">
                            <div class="rounded border overflow-hidden shadow-md bg-white">
                                <div class="absolute -mt-[50px] w-full flex justify-center">
                                    <div class="h-24 w-24">
                                        <img src={photoURL} alt="Display Picture of Andres Berlin" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class=" mt-12 mx-auto">
                                    <h1 class="font-bold mx-auto mb-1 w-32 text-center text-[#E3963E]">{title}</h1>
                                    <h1 class="font-bold text-sm mx-auto text-center">Author: {name}</h1>
                                    <p class="text-gray-800 text-xs text-center font-semibold mb-1">Author Email: {email}</p>
                                    <p class="text-gray-800 text-xs text-center font-semibold mb-1">Posted Date: {postedDate}</p>
                                    <p class="text-gray-800 text-xs text-center font-semibold mb-1">Status</p>
                                    <p class=" text-xs text-center font-semibold text-[#E3963E]">Publisher: {publisher}</p>

                                    <div class="flex justify-center p-5 text-xs gap-3">


                                        <Link className='mx-auto place-items-center justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded'>
                                            Approve
                                        </Link>

                                        <Link className='mx-auto justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded'>
                                            Make Premium
                                        </Link>

                                        <button className='text-center p-2 bg-red-600 text-white justify-center rounded' onClick={() => handleDelete(_id)}>Delete</button>

                                        <button className='text-center p-2 bg-red-600 text-white justify-center rounded'>Decline</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AllArticlesAdminTable
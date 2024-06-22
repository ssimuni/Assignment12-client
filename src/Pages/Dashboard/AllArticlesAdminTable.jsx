import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useArticles from '../../Hooks/useArticles';

const AllArticlesAdminTable = ({ article }) => {
    const { _id, image, title, status, isPremium, name, email, photoURL, publisher, postedDate } = article;
    const { user } = useContext(AuthContext);
    const [, refetch] = useArticles();
    const [declined, setDeclined] = useState(status === 'Declined');
    const [approved, setApproved] = useState(status === 'Approved');
    const [premium, setPremium] = useState(status === 'Yes');

    const handleDelete = _id => {
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
                fetch(`https://assignment12-server-iota.vercel.app/All-Articles/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Article has been deleted. Reload This page.",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    const handleApprove = _id => {
        fetch(`https://assignment12-server-iota.vercel.app/All-Articles/approve/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setApproved(true);
                    Swal.fire({
                        title: "Approved!",
                        text: "Article has been approved.",
                        icon: "success"
                    });
                    refetch();
                }
            });
    };

    const handlePremium = _id => {
        fetch(`https://assignment12-server-iota.vercel.app/All-Articles/isPremium/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setPremium(true);
                    Swal.fire({
                        title: "Premium!",
                        text: "Article has been made premium.",
                        icon: "success"
                    });
                    refetch();
                }
            });
    };

    const handleDecline = _id => {
        Swal.fire({
            title: 'Reason for Decline',
            input: 'textarea',
            inputLabel: 'Decline Reason',
            inputPlaceholder: 'Type your reason here...',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: (reason) => {
                return fetch(`https://assignment12-server-iota.vercel.app/All-Articles/decline/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ declineReason: reason })
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            setDeclined(true);
                            Swal.fire({
                                title: "Declined!",
                                text: "Article has been declined.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        );
                    });
            }
        });
    };

    return (
        <div className="w-full mx-auto">
            <div className="container mx-auto mb-5">
                <div role="list" aria-label="Behind the scenes People" className="place-items-center justify-center flex">
                    <div role="listitem" className="relative mt-20">
                        <div className="rounded border overflow-hidden shadow-md bg-white">
                            <div className="absolute -mt-[50px] w-full flex justify-center">
                                <div className="h-24 w-24">
                                    <img src={photoURL} alt="Display Picture of Author" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                </div>
                            </div>
                            <div className="mt-12 mx-auto">
                                <h1 className="font-bold mx-auto mb-1 w-32 text-center text-[#E3963E]">{title}</h1>
                                <h1 className="font-bold text-sm mx-auto text-center">Author: {name}</h1>
                                <p className="text-gray-800 text-xs text-center font-semibold mb-1">Author Email: {email}</p>
                                <p className="text-gray-800 text-xs text-center font-semibold mb-1">Posted Date: {postedDate}</p>
                                <p className="text-gray-800 text-xs text-center font-semibold mb-1">Status: {status}</p>
                                <p className="text-gray-800 text-xs text-center font-semibold mb-1">Premium: {isPremium}</p>
                                <p className="text-xs text-center font-semibold text-[#E3963E]">Publisher: {publisher}</p>
                                <div className="flex justify-center p-5 text-xs gap-3">
                                    <button
                                        className='mx-auto place-items-center justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded'
                                        onClick={() => handleApprove(_id)}
                                        disabled={declined || approved}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className='mx-auto justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded'
                                        onClick={() => handlePremium(_id)}
                                        disabled={declined || premium}
                                    >
                                        Make Premium
                                    </button>
                                    <button
                                        className='text-center p-2 bg-red-600 text-white justify-center rounded'
                                        onClick={() => handleDelete(_id)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className='text-center p-2 bg-red-600 text-white justify-center rounded'
                                        onClick={() => handleDecline(_id)}
                                        disabled={declined || approved || premium}
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllArticlesAdminTable;

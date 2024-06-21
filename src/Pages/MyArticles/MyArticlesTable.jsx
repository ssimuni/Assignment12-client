import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useArticles from '../../Hooks/useArticles';

const MyArticlesTable = ({ article, index }) => {
    const { _id, image, title, status, isPremium, declineReason } = article;
    const { user } = useContext(AuthContext);
    const [, refetch] = useArticles();

    const handleDelete = (_id) => {
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
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Article has been deleted. Reload this page.",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    const handleShowDeclineReason = (reason) => {
        Swal.fire({
            title: 'Reason for Decline',
            text: reason,
            icon: 'error',
            confirmButtonText: 'Close'
        });
    };

    return (
        <tr className="text-gray-700">
            <td className="text-center px-4 py-3">{index + 1}</td>
            <td className="px-4 py-3 lg:w-[400px]">
                <div className="flex items-center text-sm">
                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img className="object-cover w-full h-full rounded-full" src={image} alt="" loading="lazy" />
                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                        <p className="font-semibold text-black">{title}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-ms font-semibold lg:w-28">{isPremium}</td>
            <td className="px-4 py-4 text-ms font-semibold lg:w-28 flex items-center">
                {status}
                {status === "Declined" && (
                    <button
                        className="ml-2 text-xs p-1 bg-[#E3963E] text-white rounded"
                        onClick={() => handleShowDeclineReason(declineReason)}
                    >
                        Reason
                    </button>
                )}
            </td>
            <td className="text-xs">
                <Link to={`/details/${_id}`} className="mx-auto justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded">
                    Details
                </Link>
            </td>
            <td className="text-xs">
                <Link to={`/updateMyArticles/${_id}`} className="mx-auto justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded">
                    Update
                </Link>
            </td>
            <td className="px-4 py-3 text-xs text-center">
                <button className="text-center p-2 bg-red-600 text-white justify-center rounded" onClick={() => handleDelete(_id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyArticlesTable;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const PublisherTable = ({ article, index }) => {
    const { _id, image, title, status, isPremium, declineReason, name, email } = article;

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
            <td className="text-center px-4 py-3 border">{index + 1}</td>
            <td className="border px-4 py-3 lg:w-[400px]">
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
            <td className="border px-4 py-3 text-ms font-semibold lg:w-48">{name}</td>
            <td className="border px-4 py-3 text-ms font-semibold">{email}</td>
            <td className="px-4 py-3 text-ms font-semibold lg:w-20 border">{isPremium}</td>
            <td className="px-4 py-4 text-ms font-semibold lg:w-28 justify-center text-center border">
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
            <td className="text-xs border">
                <Link to={`/details/${_id}`} className="mx-auto justify-center flex w-14 text-center p-2 bg-[#E3963E] text-white rounded">
                    Details
                </Link>
            </td>
        </tr>
    );
};

export default PublisherTable;

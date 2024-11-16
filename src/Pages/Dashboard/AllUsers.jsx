import React, { useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://assignment12-server-iota.vercel.app/users').then((res) => res.json())
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(3); // 3 users per page

  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const makeAdmin = (user) => {
    axios.patch(`https://assignment12-server-iota.vercel.app/users/admin/${user._id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: 'Success!',
            text: 'Successfully added as admin!',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        }
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add admin!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  }


  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this user!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment12-server-iota.vercel.app/userss/${user._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"All Users"} />
      <h2 className='text-4xl text-[#E3963E] font-bold italic ml-5'>
        Total Users: {users?.length}
      </h2>

      <section className="antialiased text-gray-600 mt-5 mx-auto w-full px-4">
        <div className="flex flex-col justify-center h-full w-full">
          <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div className="p-3 w-full">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Profile Picture</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Role</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-300">
                    {currentUsers.map(user => (
                      <tr key={user._id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 mr-2 sm:mr-3">
                              <img className="rounded-full w-10 h-10" src={user.image} width="40" height="40" alt={user.name} />
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="font-medium text-gray-800">{user.name}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-bold text-[#E3963E]">{user.role}</div>
                        </td>
                        <td className="flex items-center justify-center p-2 whitespace-nowrap">
                          {user.role === 'Admin' ?
                            <button disabled onClick={() => makeAdmin(user)} className="uppercase text-xs font-bold w-24 bg-gray-300 p-3 rounded-lg text-center place-items-center justify-center flex">
                              Make Admin
                            </button> :
                            (
                              <button onClick={() => makeAdmin(user)} className="uppercase text-xs font-bold w-24 bg-[#E3963E] text-gray-100 p-3 rounded-lg text-center place-items-center justify-center flex">
                                Make Admin
                              </button>
                            )}
                        </td>
                        <td> <button className="text-center p-2 bg-red-600 text-white justify-center rounded"
                          onClick={() => handleDelete(user)}>
                          Delete
                        </button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <nav className="inline-flex">
          {[...Array(Math.ceil(users.length / perPage)).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`uppercase mx-1 text-xs font-bold ${currentPage === number + 1
                ? 'bg-[#E3963E] text-gray-100'
                : 'bg-gray-300 text-gray-700'
                } p-3 rounded-lg text-center place-items-center justify-center flex`}
            >
              {number + 1}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default AllUsers;

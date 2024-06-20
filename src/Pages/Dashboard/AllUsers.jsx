import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('http://localhost:5000/users').then((res) => res.json())
  });

  return (
    <div>
      <SectionTitle heading={"All Users"} />
      <h2 className='text-4xl text-[#E3963E] font-bold italic ml-5'>
        Total Users: {users?.length}
      </h2>


      <section class="antialiased text-gray-600 mt-5 mx-auto w-full px-4">
        <div class="flex flex-col justify-center h-full w-full">

          <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <div class="p-3 w-full">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Profile Picture</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Name</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Email</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Role</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left"></div>
                      </th>

                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-300">
                    {
                      users.map(user => <tr key={user._id}>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 mr-2 sm:mr-3"><img class="rounded-full w-10 h-10" src={user.photo} width="40" height="40" alt="Alex Shatov" /></div>

                          </div>
                        </td>
                        <td>  <div class="font-medium text-gray-800">{user.name}</div></td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">{user.email}</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="text-left">role</div>
                        </td>
                        <td class="flex items-center justify-center p-2 whitespace-nowrap">
                          <button className="uppercase text-xs font-bold w-24  bg-[#E3963E] text-gray-100 p-3 rounded-lg text-center place-items-center justify-center flex ">
                            Make Admin
                          </button>
                        </td>

                      </tr>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllUsers;

import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from './useAxiosPublic';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosPublic();
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/adminn/${user.email}`);
            return res.data?.admin;
        },
    });

    return [isAdmin];
}

export default useAdmin;

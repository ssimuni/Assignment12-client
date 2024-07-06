import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from './useAxiosPublic';

const usePremium = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosPublic();
    const { data: isPremium, refetch } = useQuery({
        queryKey: [user?.email, 'isPremium'],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/premium/${user.email}`);
            return res.data?.premium;
        },
        refetchInterval: 6000,
    });

    return [isPremium, refetch];
}

export default usePremium;

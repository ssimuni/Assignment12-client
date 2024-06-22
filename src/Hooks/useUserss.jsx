import { useQuery } from "@tanstack/react-query";

const useUserss = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch('https://assignment12-server-iota.vercel.app/users');
            const data = await response.json();
            return data;
        },
    });

    const getUserById = (userId) => {
        return users.find(user => user.id === userId);
    };

    return { users, refetch, getUserById };
};

export default useUserss;

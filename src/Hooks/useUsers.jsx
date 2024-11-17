import { useQuery } from "@tanstack/react-query"

const useUsers = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch(import.meta.env.VITE_API_URL + '/users').then((res) =>
                res.json(),
            ),
        refetchInterval: 6000,
    })
    return [users, refetch]
}

export default useUsers
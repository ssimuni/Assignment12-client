import { useQuery } from "@tanstack/react-query"

const useUsers = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('https://assignment12-server-iota.vercel.app/users').then((res) =>
                res.json(),
            ),
        refetchInterval: 6000,
    })
    return [users, refetch]
}

export default useUsers
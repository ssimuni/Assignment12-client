import { useQuery } from "@tanstack/react-query"

const useUsers = () => {
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch('http://localhost:5000/users').then((res) =>
                res.json(),
            )
    })
    return [users, refetch]
}

export default useUsers
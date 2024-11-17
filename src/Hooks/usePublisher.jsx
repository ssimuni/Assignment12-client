import { useQuery } from "@tanstack/react-query"

const usePublisher = () => {
    const { refetch, data: publishers = [] } = useQuery({
        queryKey: ['publishers'],
        queryFn: () =>
            fetch(import.meta.env.VITE_API_URL + '/publishers').then((res) =>
                res.json(),
            ),
        refetchInterval: 6000,
    })
    return [publishers, refetch]
}

export default usePublisher
import { useQuery } from "@tanstack/react-query"

const usePublisher = () => {
    const { refetch, data: publishers = [] } = useQuery({
        queryKey: ['publishers'],
        queryFn: () =>
            fetch('https://assignment12-server-iota.vercel.app/publishers').then((res) =>
                res.json(),
            ),
        refetchInterval: 6000,
    })
    return [publishers, refetch]
}

export default usePublisher
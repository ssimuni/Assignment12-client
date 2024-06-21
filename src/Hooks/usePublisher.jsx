import { useQuery } from "@tanstack/react-query"

const usePublisher = () => {
    const { refetch, data: publishers = [] } = useQuery({
        queryKey: ['publishers'],
        queryFn: () =>
            fetch('http://localhost:5000/publishers').then((res) =>
                res.json(),
            )
    })
    return [publishers, refetch]
}

export default usePublisher
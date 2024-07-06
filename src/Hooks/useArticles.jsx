import { useQuery } from "@tanstack/react-query"


const useArticles = () => {
    const { refetch, data: article = [] } = useQuery({
        queryKey: ['article'],
        queryFn: () =>
            fetch('https://assignment12-server-iota.vercel.app/All-Articles').then((res) =>
                res.json(),
            ),
        refetchInterval: 6000,

    })
    return [article, refetch]
}

export default useArticles
import { useQuery } from "@tanstack/react-query"


const useArticles = () => {
    const { refetch, data: article = [] } = useQuery({
        queryKey: ['article'],
        queryFn: () =>
            fetch('http://localhost:5000/All-Articles').then((res) =>
                res.json(),
            )
    })
    return [article, refetch]
}

export default useArticles
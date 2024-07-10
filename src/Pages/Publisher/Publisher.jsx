import React, { useContext } from 'react'
import SectionTitle from "../../Components/SectionTitle"
import PublisherTable from './PublisherTable'
import useArticles from '../../Hooks/useArticles';
import { AuthContext } from '../../Providers/AuthProvider';

const Publisher = () => {

    const { user } = useContext(AuthContext);
    const [articles,] = useArticles();

    const myArticles = articles.filter(article => {
        return (
            article.publisher === user.displayName
        );
    });

    const premiumEarnings = myArticles.filter(article => article.isPremium === "Yes").length * 3;
    const normalEarnings = myArticles.filter(article => article.isPremium === "No").length * 1;
    const total = premiumEarnings + normalEarnings;

    return (
        <div>
            <SectionTitle heading={"My Growth & History"}></SectionTitle>
            <h2 className='text-4xl text-[#E3963E] font-bold italic ml-5 mb-10'>
                Total Articles Published Under Me: {myArticles.length}
            </h2>

            <h2 className='text-4xl text-[#E3963E] font-bold italic ml-5 mb-10'>
                Total Earning: {total}$
                <h2 className='mt-10 text-xl text-[#E3963E] font-bold italic ml-5 mb-10'>
                    From Premium Articles: {premiumEarnings}$
                    <br />
                    From Normal Articles: {normalEarnings}$
                </h2>
            </h2>

            <section className="container mx-auto p-6 font-mono">
                <div className="border w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-sm font-semibold text-gray-600 bg-gray-100">
                                    <th className="text-center px-4 py-3">Serial</th>
                                    <th className="px-4 py-3 text-left">Title with Post Image</th>
                                    <th className="px-4 py-3 text-left">Name</th>
                                    <th className="px-4 py-3 text-left">Email</th>
                                    <th className="px-4 py-3 text-left">Premium</th>
                                    <th className="px-4 py-3 text-center">Status</th>
                                    <th className="px-4 py-3 text-center">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myArticles.map((article, index) => (
                                    <PublisherTable
                                        key={article._id}
                                        article={article}
                                        index={index}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Publisher
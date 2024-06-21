import SectionTitle from '../../Components/SectionTitle';
import useArticles from '../../Hooks/useArticles';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AllArticlesAdminTable from './AllArticlesAdminTable';

const AllArticlesAdmin = () => {
    const [articles] = useArticles(); // Assuming useArticles hook returns articles array

    const { user } = useContext(AuthContext);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(3); // Number of articles per page

    // Logic for displaying current articles
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <SectionTitle heading={"All Articles"} />
            <div className=''>
                <h2 className='text-4xl text-[#E3963E] font-bold italic ml-5'>Total Articles: {articles.length}</h2>
                <section className="container mx-auto p-6 font-mono m-5">
                    <div className="border w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full">
                            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 gap-3 w-full mx-auto justify-center'>
                                {currentArticles.map((article) => (
                                    <AllArticlesAdminTable
                                        key={article._id}
                                        article={article}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pagination */}
                <div className="flex justify-center mt-4 mb-8">
                    <nav className="inline-flex">
                        {[...Array(Math.ceil(articles.length / articlesPerPage)).keys()].map(number => (
                            <button
                                key={number + 1}
                                onClick={() => paginate(number + 1)}
                                className={`uppercase mx-1 text-xs font-bold ${currentPage === number + 1
                                        ? 'bg-[#E3963E] text-gray-100'
                                        : 'bg-gray-300 text-gray-700'
                                    } p-3 rounded-lg text-center place-items-center justify-center flex`}
                            >
                                {number + 1}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default AllArticlesAdmin;

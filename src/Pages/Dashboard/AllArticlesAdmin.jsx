import SectionTitle from '../../Components/SectionTitle'
import useArticles from '../../Hooks/useArticles';
import React, { useContext, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import AllArticlesAdminTable from './AllArticlesAdminTable';

const AllArticlesAdmin = () => {
    const [article] = useArticles();

    const { user } = useContext(AuthContext);

    return (
        <div>
            <SectionTitle heading={"All Articles"} />
            <div className=''>
                <h2 className='text-4xl text-[#E3963E] font-bold italic ml-5'>Total Articles: {article.length}</h2>
                <section className="container mx-auto p-6 font-mono m-5">
                    <div className="border w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                        <div className="w-full">
                            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-5 gap-3 w-full mx-auto justify-center'>
                                {article.map((article) => (
                                    <AllArticlesAdminTable
                                        key={article._id}
                                        article={article}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AllArticlesAdmin
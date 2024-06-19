import React, { useContext, useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import MyArticlesTable from './MyArticlesTable';

const MyArticles = () => {

    const articles = useLoaderData();
    const { user } = useContext(AuthContext);

    const myArticles = articles.filter(article => {
        return (
            article.name === user.displayName &&
            article.email === user.email
        )
    })

    return (
        <div>
            <section class=" container mx-auto p-6 font-mono">
                <div class=" border w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">

                            <div className=''>

                                {myArticles.map((article, index) => (
                                    <MyArticlesTable
                                        key={article._id}
                                        article={article}
                                        index={index}
                                    />
                                ))}

                            </div>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MyArticles
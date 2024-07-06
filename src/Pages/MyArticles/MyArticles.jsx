import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import MyArticlesTable from './MyArticlesTable';
import useArticles from '../../Hooks/useArticles';

const MyArticles = () => {
    // const articles = useLoaderData();
    const [articles,] = useArticles();
    const { user } = useContext(AuthContext);

    const myArticles = articles.filter(article => {
        return (
            article.name === user.displayName &&
            article.email === user.email
        );
    });

    return (
        <div>
            <section className="container mx-auto p-6 font-mono">
                <div className="border w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-sm font-semibold text-gray-600 bg-gray-100">
                                    <th className="text-center px-4 py-3">Serial</th>
                                    <th className="px-4 py-3 text-left">Title with Post Image</th>
                                    <th className="px-4 py-3 text-left">Premium</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-center">Details</th>
                                    <th className="px-4 py-3 text-center">Update</th>
                                    <th className="px-4 py-3 text-center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myArticles.map((article, index) => (
                                    <MyArticlesTable
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
    );
};

export default MyArticles;

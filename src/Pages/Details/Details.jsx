import React, { useContext, useEffect } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import SectionTitle from '../../Components/SectionTitle'
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
const Details = () => {

    const articles = useLoaderData();


    const { _id } = useParams();


    const article = articles.find(article => article._id === _id);

    const { user, email } = useContext(AuthContext);

    useEffect(() => {
        const updateViewCount = async () => {

            if (user?.email !== article.email) {
                try {
                    const response = await fetch(import.meta.env.VITE_API_URL + `/All-Articles/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email })
                    });
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                } catch (error) {
                    console.error('Failed to update view count:', error);
                }
            }

        };

        updateViewCount();
    }, [_id, email]);

    return (
        <div>
            <SectionTitle heading={"See Details"} subHeading={article.title}></SectionTitle>
            <div class="lg:ml-20 antialiased text-gray-900 mt-10 mb-5">
                <div>

                    <img src={article.image} class="object-cover w-[700px] h-96 object-center rounded-lg shadow-md" />


                    <div class="relative rounded-lg lg:-mt-20 w-[500px] bg-gradient-to-r from-pink-500 via-red-300 to-orange-500 mx-auto p-1 shadow-lg">
                        <div class="bg-white p-6 rounded-lg shadow-lg">

                            <h4 class="text-center mb-2 mt-1 text-xl font-semibold uppercase leading-tight text-transparent bg-gradient-to-r from-pink-500 via-[#E3963E] to-orange-500 bg-clip-text">{article.title}</h4>

                            <div class="flex items-baseline">
                                <span class="bg-[#E3963E] text-white p-2 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                    Publisher
                                </span>
                                <div class="ml-2 text-gray-600 uppercase text-s font-semibold tracking-wider">
                                    {article.publisher}
                                </div>
                            </div>


                            <div className="flex my-2 items-baseline">
                                <span className="bg-[#E3963E] text-white p-2 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                                    Tags
                                </span>
                                <div className="ml-2 text-gray-600 uppercase text-sm font-semibold tracking-wider">
                                    {article.tags.join(', ')}
                                </div>
                            </div>


                            <h4 class="mt-1 text-m font-semibold uppercase leading-tight text-[#E3963E]">Description</h4>

                            <div class="mt-1">
                                {article.description}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Details
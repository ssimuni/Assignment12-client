import React from 'react'

const AllArticlesCard = () => {
    return (
        <div>

            <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
                <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)' }}
                    class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>
                <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                    <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Title</div>
                    <div class="pt-1 pb-2 text-center font-semibold text-s text-gray-800">Publisher</div>
                    <div class=" py-2 px-3 bg-[#f5b872]">
                        <h1 class="text-white">description</h1>
                        <button class="text-center mx-auto flex justify-center bg-[#E3963E] text-xs text-white p-2 font-bold rounded uppercase hover:bg-[#e3af73]">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllArticlesCard
import React from 'react'
import Select from 'react-select';

const AddArticles = () => {

    const image = import.meta.env.VITE_imgHost;
    const imageApi = `https://api.imgbb.com/1/upload?key=${image}`;

    const onSubmit = (data) => {
        console.log(data)
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderBottom: `2px solid ${state.isFocused ? '#E3963E' : '#E3963E'}`,
            boxShadow: state.isFocused ? '0 1px 0 0 #E3963E' : 'none',
            '&:hover': {
                borderBottom: `2px solid #E3963E`,
            },

        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#E3963E' : state.isFocused ? '#E5E7EB' : null,
            color: state.isSelected ? 'white' : 'black',
            '&:hover': {
                backgroundColor: '#E3963E',
                color: 'white',
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#E3963E',
            color: 'white',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white',
            ':hover': {
                backgroundColor: '#D97706',
                color: 'white',
            },
        }),
    };

    const options = [
        { value: 'Breaking News', label: 'Breaking News' },
        { value: 'Top Stories', label: 'Top Stories' },
        { value: 'Local News', label: 'Local News' },
        { value: 'World News', label: 'World News' },
        { value: 'National News', label: 'National News' },
        { value: 'Politics', label: 'Politics' },
        { value: 'Economy', label: 'Economy' },
        { value: 'Business', label: 'Business' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Technology', label: 'Technology' },
        { value: 'Science', label: 'Science' },
        { value: 'Health', label: 'Health' },
        { value: 'Environment', label: 'Environment' },
        { value: 'Education', label: 'Education' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Culture', label: 'Culture' },
        { value: 'Lifestyle', label: 'Lifestyle' },
        { value: 'Opinion', label: 'Opinion' },
        { value: 'Editorials', label: 'Editorials' },
        { value: 'Columns', label: 'Columns' },
        { value: 'Letters to the Editor', label: 'Letters to the Editor' },
        { value: 'Elections', label: 'Elections' },
        { value: 'Natural Disasters', label: 'Natural Disasters' },
        { value: 'Public Health', label: 'Public Health' },
        { value: 'Crime', label: 'Crime' },
        { value: 'Legal Issues', label: 'Legal Issues' },
        { value: 'Government Policies', label: 'Government Policies' },
        { value: 'International Relations', label: 'International Relations' },
        { value: 'Trade Agreements', label: 'Trade Agreements' },
        { value: 'Cultural Festivals', label: 'Cultural Festivals' },
        { value: 'Sports Tournaments', label: 'Sports Tournaments' },
        { value: 'Tech Launches', label: 'Tech Launches' },
        { value: 'Product Recalls', label: 'Product Recalls' },
        { value: 'Youth', label: 'Youth' },
        { value: 'Seniors', label: 'Seniors' },
        { value: 'Men', label: 'Men' },
        { value: 'Women', label: 'Women' },
        { value: 'Families', label: 'Families' },
        { value: 'Students', label: 'Students' },
        { value: 'Professionals', label: 'Professionals' },
        { value: 'City Name', label: 'City Name' },
        { value: 'State Name', label: 'State Name' },
        { value: 'Country Name', label: 'Country Name' },
        { value: 'Region Name', label: 'Region Name' },
        { value: 'Neighborhoods', label: 'Neighborhoods' },
        { value: 'Commentary', label: 'Commentary' },
        { value: 'Analysis', label: 'Analysis' },
        { value: 'Interviews', label: 'Interviews' },
        { value: 'Reviews', label: 'Reviews' },
        { value: 'Travel', label: 'Travel' },
        { value: 'Food & Drink', label: 'Food & Drink' },
        { value: 'Fashion', label: 'Fashion' },
        { value: 'Home & Garden', label: 'Home & Garden' },
        { value: 'Automotive', label: 'Automotive' },
        { value: 'Real Estate', label: 'Real Estate' },
        { value: 'Pets', label: 'Pets' },
        { value: 'Personal Finance', label: 'Personal Finance' },
        { value: 'DIY', label: 'DIY' },
        { value: 'Gadgets', label: 'Gadgets' },
        { value: 'Internet', label: 'Internet' },
        { value: 'Artificial Intelligence', label: 'Artificial Intelligence' },
        { value: 'Cybersecurity', label: 'Cybersecurity' },
        { value: 'Startups', label: 'Startups' },
        { value: 'Social Media', label: 'Social Media' },
        { value: 'Software', label: 'Software' },
        { value: 'Hardware', label: 'Hardware' },
        { value: 'Innovation', label: 'Innovation' },
        { value: 'Mobile', label: 'Mobile' },
        { value: 'Fitness', label: 'Fitness' },
        { value: 'Nutrition', label: 'Nutrition' },
        { value: 'Mental Health', label: 'Mental Health' },
        { value: 'Medical Research', label: 'Medical Research' },
        { value: 'Diseases', label: 'Diseases' },
        { value: 'Healthcare', label: 'Healthcare' },
        { value: 'Movies', label: 'Movies' },
        { value: 'Music', label: 'Music' },
        { value: 'Theater', label: 'Theater' },
        { value: 'Art', label: 'Art' },
        { value: 'Books', label: 'Books' },
        { value: 'Television', label: 'Television' },
        { value: 'Photography', label: 'Photography' },
    ];

    return (
        <div>


            <form action="https://fabform.io/f/xxxxx" method="post">

                <section class="py-24">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="grid lg:grid-cols-2 grid-cols-1">
                            <div class="lg:mb-0 mb-10">
                                <div class="group w-full lg:h-[650px]">
                                    <div class="relative h-full">
                                        <img src="stat1.jpg" alt="ContactUs tailwind section" class="w-full h-full lg:rounded-l-2xl  bg-blend-multiply" />
                                        <h1 class="font-manrope text-white text-5xl font-bold absolute top-11 left-20">Contact us</h1>
                                        <div class="absolute bottom-0 w-full lg:p-11 p-5">
                                            <div class="bg-black rounded-lg p-6 block bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20  duration-200 transform">
                                                <a href="javascript:;" class="flex items-center mb-6">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z" stroke="#E3963E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <h5 class="text-white text-base font-normal leading-6 ml-5">470-601-1911</h5>
                                                </a>
                                                <a href="https://veilmail.io/irish-geoff" class="flex items-center mb-6">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z" stroke="#E3963E" stroke-width="2" stroke-linecap="round" />
                                                    </svg>
                                                    <h5 class="text-white text-base font-normal leading-6 ml-5">read&digest.com</h5>
                                                </a>
                                                <a href="javascript:;" class="flex items-center">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z" stroke="#E3963E" stroke-width="2" />
                                                        <path d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z" stroke="#E3963E" stroke-width="2" />
                                                    </svg>
                                                    <h5 class="text-white text-base font-normal leading-6 ml-5">654 Sycamore Avenue, Meadowville, WA 76543</h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="lg:h-[650px] p-5 lg:p-6  shadow-lg">
                                <h2 class="text-[#E3963E] font-manrope text-4xl font-semibold leading-10 mb-11">Add your article</h2>

                                <div className="relative mt-5">
                                    <input id="title" name="title" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600" placeholder="Title" />
                                    <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Title</label>
                                </div>

                                <div class="mt-5">
                                    <label for="photobutton" class=" text-gray-600">Your Photo</label>

                                    <div>
                                        <input id="photobutton" type="file" class="block w-full cursor-pointer appearance-none rounded-l-md border-b-2 rounded-lg border-[#E3963E]  bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-[#E3963E] focus:outline-none focus:ring-1 focus:ring-[#E3963E] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />

                                    </div>
                                </div>



                                <div className="mb-10 mt-5">
                                    <h4 className="text-gray-600 mb-3">
                                        Select tags
                                    </h4>
                                    <Select
                                        options={options}
                                        styles={customStyles}
                                        isMulti
                                        className="w-full"
                                        placeholder="Select tags"
                                    />
                                </div>

                                <div className="mb-10 mt-5">
                                    <h4 className="text-gray-600 mb-3">
                                        Select Publisher
                                    </h4>
                                    <Select
                                        options={options}
                                        styles={customStyles}
                                        className="w-full"
                                        placeholder="Select publisher"
                                    />
                                </div>


                                <div className="relative my-5">
                                    <textarea id="description" name="description" type="text" className="peer placeholder-transparent h-15 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600" placeholder="Description" />
                                    <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Description</label>
                                </div>


                                <button class="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-orange-500 bg-[#E3963E] shadow-sm">Submit</button>


                            </div>
                        </div>
                    </div>

                </section>
            </form>



        </div>
    )
}

export default AddArticles
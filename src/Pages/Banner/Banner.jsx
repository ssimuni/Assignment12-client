import React from 'react'

const Banner = () => {
    return (
        <div><div class="flex items-center justify-center">
            <div class="mx-auto px-6">
                <div class="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
                    <div class="group relative h-96 w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2016/01/31/19/41/apple-1172060_960_720.jpg" alt="" />
                        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                            <div class="absolute inset-x-5 bottom-6">
                                <div class="flex gap-3 text-white">
                                    <svg width="48" height="48" viewBox="0 0 32 32">
                                        <path d="M11 2H2v9h2V4h7V2z" fill="currentColor" />
                                        <path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor" />
                                        <path d="M30 11V2h-9v2h7v7h2z" fill="currentColor" />
                                        <path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor" />
                                        <path d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z" fill="currentColor" />
                                    </svg>
                                    <div>
                                        <p class="font-sembold text-xl text-gray-100">Beyond Builder</p>
                                        <p class="text-gray-300">Better Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2022/08/17/15/46/family-7392843_960_720.jpg" alt="" />
                        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                            <div class="absolute inset-x-5 bottom-6">
                                <div class="flex gap-3 text-white">
                                    <svg width="48" height="48" viewBox="0 0 32 32">
                                        <path fill="currentColor" d="M20 30h-3a2.002 2.002 0 0 1-2-2v-5h2v5h3v-5h2v-4a1.001 1.001 0 0 0-1-1h-8.72l-2-6H4a1.001 1.001 0 0 0-1 1v6h2v9h4v-7h2v7a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2v-7a2.002 2.002 0 0 1-2-2v-6a3.003 3.003 0 0 1 3-3h6.28a1.998 1.998 0 0 1 1.897 1.367L13.72 16H21a3.003 3.003 0 0 1 3 3v4a2.002 2.002 0 0 1-2 2v3a2.002 2.002 0 0 1-2 2zm8 0h-2V19h3v-6a1.001 1.001 0 0 0-1-1h-4v-2h4a3.003 3.003 0 0 1 3 3v6a2.002 2.002 0 0 1-2 2h-1zM7 9a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm18 6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z" />
                                        <path fill="currentColor" d="M18.5 15a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5Zm0-5a1.5 1.5 0 1 0 1.5 1.5a1.502 1.502 0 0 0-1.5-1.5Z" />
                                    </svg>
                                    <div>
                                        <p class="font-sembold text-xl text-gray-100">Familly and Sunset</p>
                                        <p class="text-gray-300">Better Design</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2020/04/17/14/07/athlete-5055367_960_720.jpg" alt="" />
                        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                            <div class="absolute inset-x-5 bottom-6">
                                <div class="flex gap-3 text-white">
                                    <svg width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m11.74 13.36l2.4-5.65l-1.08-2.21H10.5V4H14l.73 1.5h7.02l-1 3.5h-4.31l.67 1.37A5.002 5.002 0 0 1 24 15c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.55.71-2.94 1.82-3.85L15 9.5L12.25 16H9.9A5 5 0 1 1 5 10c2.59 0 4.72 1.97 5 4.5h.58L8.3 9h-.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.41 0 .75.34.75.75s-.34.75-.75.75h-.28l1.77 4.36M5 11.5c-1.93 0-3.5 1.57-3.5 3.5a3.504 3.504 0 0 0 6.86 1H4v-1.5h4.47c-.25-1.7-1.71-3-3.47-3m14 0c-.43 0-.85.08-1.23.22l1.93 3.96l-1.35.66l-1.85-3.79c-.62.63-1 1.5-1 2.45c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5Z" /></svg>
                                    <div>
                                        <p class="font-sembold text-xl text-gray-100">Tailwind CSS</p>
                                        <p class="text-gray-300">Better Design</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                        <img class="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125" src="https://cdn.pixabay.com/photo/2021/09/17/15/17/fruit-6633086_960_720.jpg" alt="" />
                        <div class="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                            <div class="absolute inset-x-5 bottom-6">
                                <div class="flex gap-3 text-white">
                                    <svg width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m11.74 13.36l2.4-5.65l-1.08-2.21H10.5V4H14l.73 1.5h7.02l-1 3.5h-4.31l.67 1.37A5.002 5.002 0 0 1 24 15c0 2.76-2.24 5-5 5s-5-2.24-5-5c0-1.55.71-2.94 1.82-3.85L15 9.5L12.25 16H9.9A5 5 0 1 1 5 10c2.59 0 4.72 1.97 5 4.5h.58L8.3 9h-.8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.41 0 .75.34.75.75s-.34.75-.75.75h-.28l1.77 4.36M5 11.5c-1.93 0-3.5 1.57-3.5 3.5a3.504 3.504 0 0 0 6.86 1H4v-1.5h4.47c-.25-1.7-1.71-3-3.47-3m14 0c-.43 0-.85.08-1.23.22l1.93 3.96l-1.35.66l-1.85-3.79c-.62.63-1 1.5-1 2.45c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5Z" /></svg>
                                    <div>
                                        <p class="font-sembold text-xl text-gray-100">Tailwind CSS</p>
                                        <p class="text-gray-300">Better Design</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
    )
}

export default Banner
import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className=''>

            <h3 className='text-6xl text-center font-bold text-[#E3963E] py-10'>---{heading}---</h3>
            <p className='text-xl text-center italic font-semibold pb-10'>{subHeading}</p>

        </div>
    )
}

export default SectionTitle
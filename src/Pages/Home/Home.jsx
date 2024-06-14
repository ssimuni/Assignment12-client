import React from 'react'
import Banner from '../Banner/Banner'
import AllPublisher from '../AllPublisherInHome/AllPublisher'
import Statistics from '../Statistics/Statistics'
import Pricing from '../Pricing/Pricing'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllPublisher></AllPublisher>
            <Statistics></Statistics>
            <Pricing></Pricing>
        </div>
    )
}

export default Home

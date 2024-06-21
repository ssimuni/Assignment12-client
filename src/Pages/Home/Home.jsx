import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Banner from '../Banner/Banner';
import AllPublisher from '../AllPublisherInHome/AllPublisher';
import Statistics from '../Statistics/Statistics';
import Pricing from '../Pricing/Pricing';
import Faq from '../FAQ/Faq'
import Blogs from '../BlogsHome/Blogs';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showModal) {
            Swal.fire({
                title: 'Subscription Offer!',
                text: 'Subscribe now to get premium content!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Subscribe',
                cancelButtonText: 'Later'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/subscription');
                }
            });
        }
    }, [showModal, navigate]);

    return (
        <div>
            <Banner />
            <AllPublisher />
            <Statistics />
            <Blogs></Blogs>
            <Faq></Faq>
            <Pricing />
        </div>
    );
};

export default Home;

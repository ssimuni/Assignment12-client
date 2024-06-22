import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useSearchParams } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);


const Payment = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);


    const price = searchParams.get("price");

    return (
        <div>
            <SectionTitle heading={"Pay to subscribe"}></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    )
}

export default Payment
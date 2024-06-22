import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import useUsers from '../../Hooks/useUsers';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const CheckoutForm = ({ price }) => {
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);
    const [users, refetch] = useUsers(); // users is an array of users

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosPublic();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
            .catch(err => console.error(err));
    }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !clientSecret) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user.email,
                    name: user.displayName,
                },
            },
        });

        if (confirmError) {
            setError(confirmError.message);
            console.error(confirmError);
        } else {
            console.log("PaymentIntent", paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                updatePremiumTaken();
            }
        }
    };

    const getExpirationTime = (price) => {
        switch (price) {
            case 1:
                return 1 * 60 * 1000;
            case 5:
                return 5 * 24 * 60 * 60 * 1000;
            case 10:
                return 10 * 24 * 60 * 60 * 1000;
            default:
                return 0;
        }
    };

    const updatePremiumTaken = () => {
        const expirationTime = getExpirationTime(price);
        const premiumTaken = new Date(Date.now() + expirationTime);

        const currentUser = users.find(u => u.email === user.email);

        const premiumTakenISO = premiumTaken.toISOString();

        axiosSecure.patch(`/users/${currentUser._id}/premium`, { premiumTaken: premiumTakenISO })
            .then(res => {
                console.log('Premium status updated:', res.data);
                refetch();

                setTimeout(() => {
                    axiosSecure.patch(`/users/${currentUser._id}/premium`, { premiumTaken: null })
                        .then(res => {
                            console.log('Premium status reset after expiration');
                            refetch();
                        })
                        .catch(err => console.error(err));
                }, expirationTime);
            })
            .catch(err => console.error(err));
    };



    return (
        <form className="mx-auto mb-5 w-full max-w-md bg-white p-8 rounded-lg shadow-md border border-[#E3963E]" onSubmit={handleSubmit}>
            <CardElement
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E3963E]"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            border: '#E3963E',
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className="flex justify-center mx-auto h-12 p-6 items-center mt-5 text-white text-base font-semibold leading-6 rounded transition-all duration-700 bg-[#E3963E] shadow-sm"
                type="submit"
                disabled={!stripe || !clientSecret}
            >
                Pay
            </button>
            {error && <p className='text-red-600'>{error}</p>}
            {transactionId && <p className='text-green-500'>Your Transaction Id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;

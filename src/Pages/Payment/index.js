import React, { useState, useEffect } from 'react';
import PaymentForm from './PaymentForm';
import Card from './Card';
import PaymentSuccess from './PaymentSuccess';

const Payment = () => {

    const [animate_in, setAnimateIn] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);


    useEffect(() => {
        if (!paymentSuccess) {
            setTimeout(() => {
                setAnimateIn(true);
            }, 500);
        }
    }, [])

    // form state
    const getFormStatus = (data) => {
        setPaymentSuccess(true);
        setAnimateIn(false);
    }

    return (
        <section className="main_body primary_gradient flex flex__center payment_details">
            <div className="container">
                <div className={"payment_details_wrap flex flex__wrap " +
                    (
                        animate_in ? 'animate_in' :
                            paymentSuccess ? 'payment_success' : null
                    )
                }>
                    <span className="bg_slit"></span>
                    <Card />
                    <PaymentForm getFormStatus={getFormStatus} />
                    <PaymentSuccess />
                </div>
            </div>
        </section>
    );
}

export default Payment;
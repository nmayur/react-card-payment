import React from 'react';
import PaymentForm from './PaymentForm';
import Card from './Card';

const Payment = () => {

    // form state
    const getFormStatus = (data) => {
        console.log(data);
    }

    return (
        <section className="main_body primary_gradient flex flex__center payment_details">
            <div className="container">

                <div className="payment_details_wrap flex flex__wrap aniamte_in animate_out">
                    <span className="bg_slit"></span>
                    <Card />
                    <PaymentForm getFormStatus={getFormStatus}/>
                </div>
            </div>
        </section>
    );
}

export default Payment;
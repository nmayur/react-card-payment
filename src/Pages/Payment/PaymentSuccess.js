import React from 'react';
import { Link } from 'react-router-dom';
const PaymentSuccess = (props) => {
    return (
        <div className="payment_success_dialog">
            <h1 className="success_title">Payment Successfull</h1>
            <p className="payment_seccess_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <Link to="/" className="btn btn__block btn__success back_to_home">Home</Link>
        </div>
    );
}

export default PaymentSuccess;
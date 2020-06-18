import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <section className="main_body primary_gradient flex flex__center">
            <Link to="/payment-details" className="btn btn__block btn__default proceed_to_pay">Proceed to Payment</Link>
        </section>
    );
}

export default Home;
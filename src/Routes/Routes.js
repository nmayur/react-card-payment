import React from 'react';
import { Switch, Route } from "react-router-dom";

// components
import Home from '../Pages/Home';
import Payment from '../Pages/Payment';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/payment-details" component={Payment} />
        </Switch>
    )
}

export default Routes;
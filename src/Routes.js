import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Home from './home/index';
import Products from './products/index';

export default () => {
    return (
        <Switch>

            <Route exact path="/" >
                <Home />
            </Route>

            <Route exact path="/products" >
                <Products />
            </Route>

        </Switch>
    )
}
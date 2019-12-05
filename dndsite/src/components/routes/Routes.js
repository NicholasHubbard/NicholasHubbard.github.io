import React from 'react';
import { Route } from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Races' component={Races} />
            <Route exact path='/Spells' component={Spells} />
            <Route exact path='/Equipment' component={Equipment} />
        </div>
    )
};

export default Routes;
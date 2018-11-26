import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home/Home.js';
import Details from './Details/Details.js';
import Listing from './Listing/Listing.js';

const AppRouter = ()=>{
    return(
        <Router>
            <div>
                <Route path='/' exact component={Home}/>
                <Route path='/listing/:cityName/:cityId' component={Listing}/>
                <Route path='/details/:restId' component={Details}/>
            </div>
            
        </Router>
    );
    
}
export default AppRouter
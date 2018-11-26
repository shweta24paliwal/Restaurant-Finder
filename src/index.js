import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './Store/configStore.js';
import * as serviceWorker from './serviceWorker';
// import Details from './Details/Details.js';
import AppRouter from './AppRouter.js'
// import Listing from './Listing/Listing.js';
import './Resources/normalize.css';

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

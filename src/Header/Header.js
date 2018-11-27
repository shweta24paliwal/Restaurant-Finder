import React from 'react';
import './Header.css';
const Header = ()=>{
    return(
        <header>
            <a href="/">
              <h1 className='header-title'>
                Restaurant
                <span className='header-title-2'> Finder</span>
             </h1>
              <span className='header-icon'><i class="fas fa-cookie-bite"></i></span>
            </a>
        </header>
    )
};
export default Header
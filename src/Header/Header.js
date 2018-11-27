import React from 'react';
import './Header.css';
const Header = ()=>{
    return(
        <header>
            <h1 className='header-title'>Restaurant </h1>
            <h1 className='header-title-2'>Finder</h1>
            <span className='header-icon'><i class="fas fa-cookie-bite"></i></span>
        </header>
    )
}
export default Header
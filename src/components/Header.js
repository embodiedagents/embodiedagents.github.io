import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Importing CSS from the same directory

const logo = process.env.PUBLIC_URL + '/logo.png';

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className={`hamburger ${isNavVisible ? 'active' : ''}`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`navigation ${isNavVisible ? 'visible' : ''}`}> 
                    <ul>
                            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/people" activeClassName="active">People</NavLink></li>
                            {/* <li><NavLink to="/research" activeClassName="active">Research</NavLink></li> */}
                            <li><NavLink to="/publications" activeClassName="active">Publications</NavLink></li>
                            <li><NavLink to="/joining" activeClassName="active">Joining</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

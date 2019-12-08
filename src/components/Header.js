import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__item">
                Members
            </Link>
            <div className="header__menu">
                <Link to="/" className="header__item">
                    All Members
                </Link>
            </div>
        </div>
    )
};

export default Header;
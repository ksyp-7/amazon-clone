import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Header() {
    return (
        <div className="header">
            <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Ksyp"
                />
        <div className="header_search">
                <input 
                    className="header_searcbInput"
                    type="text" />
                    <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
            <div className="header_option">
                <span className="header_optionLine1">
                Hello Guest
                </span>
                <span className="header_optionLine2">
                Sign In
                </span>
            </div>


            <div className="header_option">
                <span className="header_optionLine1">
                Returns
                </span>
                <span className="header_optionLine2">
                & Orders
                </span>
                </div>


            <div className="header_option">
                <span className="header_optionLine1">
                Your 
                </span>
                <span className="header_optionLine2">
                Prime
                </span>
            </div>

            <div className="header_optionB">
                <ShoppingCartIcon />
                <span className="header_optionLine2 header_optionB">
                0
                </span>
            </div>
        </div>

        </div>
    )
}

export default Header

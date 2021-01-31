import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"
                />
        <div className="header_search">
                <input 
                    className="header_searcbInput"
                    type="text" />
                    {/* Logo */}
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
        </div>

        </div>
    )
}

export default Header

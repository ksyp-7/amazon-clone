import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvide';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handelAithentication = () => {
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Ksyp"
                />
            </Link>


            <div className="header_search">
                <input
                    className="header_searcbInput"
                    type="text" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user &&  '/login'}>
                    <div onClick={handelAithentication} className="header_option">
                        <span className="header_optionLine1">
                            Hello {!user ? 'Guest' : user.email}
                </span>
                        <span className="header_optionLine2">
                            {user ? 'Sign out' : 'Sign In'}
                </span>
                    </div>
                </Link>

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

                <Link to="/checkout">

                    <div className="header_optionB">
                        <ShoppingCartIcon />
                        <span className="header_optionLine2 header_Bcount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header

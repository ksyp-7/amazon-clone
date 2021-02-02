import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="C_left">
                <img className="ad"
                    src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                    alt=" " 
                    />
                    <div>
                        <h2 className="c_t">
                        Your Shoping Basket
                        </h2>
                    </div>
            </div>
            <div className="C_reight">
                <h2>The SubTotal Will go hear</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout 

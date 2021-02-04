import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.jsx';

import {useStateValue} from './StateProvide';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

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

                        
                        {/*CheckoutProducts*/}
                    </div>
            </div>
            <div className="C_reight">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout 

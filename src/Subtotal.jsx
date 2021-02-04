import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './StateProvide';
import {getBasketTotal} from './reduser';


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="Subtotal">
        <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="S_G">
                        <input type="checkbox" />
                        This Order Contains A Gift .
                        </small>
                    </div>
                )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <button>Procced To Checkout</button>
        </div>
    );
}

export default Subtotal 

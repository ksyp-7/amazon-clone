import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
function Subtotal() {
    return (
        <div className="Subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                        Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="S_G">
                        <input type="checkbox" />
                        This Order Contains A Gift.
                        </small>
                    </div>
                )}
                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />
                <button>Procced To Checkout</button>
        </div>
    );
}

export default Subtotal 

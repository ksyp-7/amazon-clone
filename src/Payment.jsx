import React, { useState, useEffect } from 'react'
import CP from './CP';
import './Payment.css'
import { useStateValue } from './StateProvide';
import { Link,useHistory } from 'react-router-dom';
import Subtotal from './Subtotal';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from './reduser';
import axios from './axios';


function Payment() {

    const [{ basket }, user, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSector] = useState(true);

    useEffect(() => {
        const getClientSecret  = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`  
            });
            setClientSector(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handelSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe .confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
            
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            // history.replace('/orders');
        })
    }

    const handelChange = event => {
        setDisabled = (event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="pay">
            <div className="pay_contaoner">

                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} items </Link>
                )
            </h1>
                {/*Payment Section - delivery address*/}
                <div className="pay_section">
                    <div className="pay_title">
                        <h3>delivery Address</h3>

                    </div>
                    <div className="pay_address">
                        <p>642 ReactDom Lace </p>
                        <p>Surendranagar, Gujrat</p>


                    </div>
                </div>
                {/*Payment Section - Review item*/}
                <div className="pay_section">
                    <div className="pay_title">
                        <h3>Review Item And delivery</h3>
                    </div>
                    <div className="pay_item">
                        {basket.map(item => (
                            <CP
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                prise={item.prise}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/*Payment Section - payment method*/}
                <div className="pay_section">
                    <div className="pay_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="pay_detail">
                        <form onSubmit={handelSubmit}>
                            <CardElement onChange={handelChange} />

                            <div className="pay_prisetag">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <div>
                                            <h3>Order Total: {value}</h3>
                                        </div>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

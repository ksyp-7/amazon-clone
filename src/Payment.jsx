import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvide';
import CP from "./CP";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reduser';
import axios from './axios';
import { db } from "./firebase";

function Payment() {

    // const [{ basket }, user, dispatch] = useStateValue();
    const [{basket, user }, dispatch, paymentIntent] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSector] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSector(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('the secrate is >>> ', clientSecret);

    console.log("this >>",user.uid)
    const handelSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }

        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
            //   .doc(paymentIntent.id)
            //   .set({
            //       basket: basket,
            //       amount: paymentIntent.amount,
            //       created: paymentIntent.created
            //   })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

    }


    const handelChange = event => {
        setDisabled(event.empty);
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
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
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

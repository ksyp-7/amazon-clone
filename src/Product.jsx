import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvide';

export default function Product({id, title, image, prise, rating}) {
    const [{basket}, dispatch] = useStateValue();
    console.log("This >>>",basket);
    const addToBasket = () =>{
        //dispatch item into the dataLayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                prise: prise,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="P_I">
                <p>{title}</p>
                <p className="P_prise">
                    <small>₹</small>
                    <strong>{prise}</strong>
                </p>
                <div className="p_rating">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>
            <img 
                src={image}
                alt=" " 
                />
            <button onClick={addToBasket}>Add to Bucket</button>
        </div>
    )
}

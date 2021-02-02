import React from 'react'
import './Product.css'

export default function Product({id, title, image, prise, rating}) {
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
            <button>Add to Bucket</button>
        </div>
    )
}

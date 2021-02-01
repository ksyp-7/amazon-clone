import React from 'react'
import './Product.css'

export default function Product() {
    return (
        <div className="product">
            <div className="P_I">
                <p>An Examined Life</p>
                <p className="P_prise">
                    <small>₹</small>
                    <strong>1575</strong>
                </p>
                <div className="p_rating">
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                </div>
            </div>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Book_Cover_An_Examined_Life.jpg"
                alt=" " 
                />
            <button>Add to Bucket</button>
        </div>
    )
}

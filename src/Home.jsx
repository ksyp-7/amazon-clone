import React from 'react';
import './Home.css';
import Product from './Product.jsx';
function Home() {
    return (
        <div className="home">         
            <div className="home_con">
            <img className="A"
            src='https://upload.wikimedia.org/wikipedia/commons/3/39/Amazon_Prime_Norge.png'
            alt=""/>

            <div className="home_row">
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="home_row">
                <Product />
            </div>
            </div>
        </div>
    )
}
export default Home

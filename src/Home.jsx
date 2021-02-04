import React from 'react';
import './Home.css';
import Product from './Product.jsx';
import {useStateValue} from './StateProvide';
function Home() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="home">         
            <div className="home_con">
            <img className="A"
            src='https://upload.wikimedia.org/wikipedia/commons/3/39/Amazon_Prime_Norge.png'
            alt=""/>

            <div className="home_row">
                <Product 
                    id={1}
                    title="An Examined Life: Essays and Reflections by Karan Singh   Language: English,Item Weight: 170 g"
                    prise={799}
                    image="https://upload.wikimedia.org/wikipedia/commons/2/2f/Book_Cover_An_Examined_Life.jpg"
                    rating={4}/>
                <Product 
                    id={2}
                    title="Buy Brannd New Iphone 4s white(White, 512MB RAM,32GB),1432 mAh Battery|A5 Dual Core Processor"
                    prise={2,999}
                    image="https://upload.wikimedia.org/wikipedia/commons/8/87/IPhone_4s_white_front%2C_back_and_side.jpg"
                    rating={3}/>

            </div>
            <div className="home_row">
                <Product
                id={3}
                title="CHKOKKO Men's Regular Fit Full Sleeves Black Denim Jacket "
                prise={749}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUuLVY2zqQyhFToQHe7v_kgy9OmPCxtQ18hy-bhTM4r18HfWDfQxFTCIHg2SSOLn_3oSCh4fg&usqp=CAc"
                rating={4}/>
            
                <Product 
                id={4}
                title="Dell Bassheads 900 On Ear Wireless BT Headphones comes with 40mm Drivers,Aux Connectivity,FM,Call Function,9Hrs* Playback time (Lether White)"
                prise={599}
                image="https://media.istockphoto.com/photos/rendering-white-headphones-isolated-on-white-background-picture-id1183368222?s=612x612"
                rating={3}/>
                <Product 
                id={5}
                title="Bacca Bucci Men's Sneaker ,
                 Sole: Phylon-EVA+Rubber,
                Closure: Lace-Up,
                Shoe Width: Medium"
                prise={949}
                image="https://m.media-amazon.com/images/I/61ZCG2zYhiL._SY625._SX._UX._SY._UY_.jpg"
                rating={4}/>
            </div>
            <div className="home_row">
                <Product 
                id={6}
                title="Hoob, known as creating magnificent-looking hookahs, has come up with a model called Atom C – hookah for those who wants to get some new hookah experience for really attractive price. Extraordinary modern minimalistic design and perfect shisha sessions. Designed for professional and home use."
                prise={999}
                image="https://www.shishascience.com/wp-content/uploads/2020/04/nube-unique-price-russian-hookah-shisha-1024x1012.jpg"
                rating={4}/>
            </div>
            </div>
        </div>
    )
}
export default Home

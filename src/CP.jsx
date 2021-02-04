import React from 'react'
import './cp.css'
import {useStateValue} from './StateProvide';

function CP({id, image, title, prise, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const remove = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='cp'>
            <img
                className="cp_i"
                 src={image}
             />
             <div className="cp_in">
                <p className="cp_t">
                {title}</p>
                <p className="cp_p">
                    <small>₹</small>
                    <strong>{prise}</strong>
                </p>
                <div className="cp_r">
                    {Array(rating)
                        .fill()
                    .map((_,i)=>(
                        <p>🌟</p>
                    ))}
                </div> 
                    <button onClick={remove}>
                        Remove From Basket
                    </button>

             </div>
            
        </div>
    )
}


export default CP
    
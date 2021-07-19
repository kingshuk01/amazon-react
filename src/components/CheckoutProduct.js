import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from '../StateProvider'

const CheckoutProduct = ({id,image, title, price, rating}) => {

    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket =()=>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkout-product'>
            <img className='checkout-product-image' src={image}></img>
            <div className='checkout-product-info'>
                <p className='checkout-product-title'>{title}</p>
                <p className='checkout-product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout-product-rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        
        </div>
    )
}

export default CheckoutProduct

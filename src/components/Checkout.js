import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84xV_sNcMBQhqbRolmx0srVZ4UDVgXY5p6g&usqp=CAU'>
                </img>

                <div >
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
                </div>
            </div>
            <div className='checkout_right'>
               
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

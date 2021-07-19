import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import {useStateValue} from '../StateProvider'
import { getBasketTotal } from '../reducer'

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText ={(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            {console.log(value)}
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox'></input>
                            This contains a gift
                        </small>
                    </>
                )}
                decicalScale={2}
                value={getBasketTotal(basket)}
                displayType = {'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal

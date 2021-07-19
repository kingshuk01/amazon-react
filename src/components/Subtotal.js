import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'

const Subtotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText ={(value) =>(
                    <>
                        <p>
                            Subtotal (0 items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox'></input>
                            This contains a gift
                        </small>
                    </>
                )}
                decicalScale={2}
                value={0}
                displayType = {'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal

import React, { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {
    const [productQuantity, setProductQuantity] = useState(initial);

    const handleSumUp = () => {
        if(productQuantity < stock){
            setProductQuantity(productQuantity+1);
        }
    }
    const handleSumDown = () => {
        if(productQuantity > 0){
            setProductQuantity(productQuantity-1);
        }
    }
    const handleBuyButton = () =>{
        onAdd(productQuantity);
    }

  return (
    <div>
        <div className='itemcount-container'>
            <button className='itemcount-button' onClick={handleSumDown}>-</button>
            <span className='itemcount-span'>{productQuantity}</span>
            <button className='itemcount-button' onClick={handleSumUp}>+</button>
        </div>
        <div>
            { stock > 0 ? 
                <button className='item-count-button-buy' onClick={handleBuyButton}>Agregar al Carrito</button> : 
                <button className='item-count-button-buy-nostock' >Sin Stock</button>
            }
        </div>
    </div>
  )
}

import React, { useContext } from 'react'
import { useState } from 'react'
import {  ItemContext } from '../context/ItemContext'


export default function ItemCount({ stock, initial, onAdd }) {
    const [productQuantity, setProductQuantity] = useState(initial);
    const { setStatus } = useContext(ItemContext);

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
        setStatus((prev) => !prev);
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

import React, { useContext  } from 'react'
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  const {itemQuantity} = useContext(CartContext);
  
  return (
    <div className='navbar-cartwidget'>
        🛒<span>{itemQuantity}</span>
    </div>
  )
}

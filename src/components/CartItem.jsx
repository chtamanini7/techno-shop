import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartItem({item}) {
  const {deleteItem} = useContext(CartContext);
  return (
    <div className="cartitem-container" style={{border: '2.5px solid #e6e6e6',borderRadius: '5px', minHeight: '10vh', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6vh'}}>
        <div><img src={item.img} alt="a" width="102" height="82" /></div>
        <div><h3>{item.name}</h3></div>
        <div><h4>${item.price}</h4></div>
        <div><h5>Quantity: {item.qty}</h5></div>
        <div style={{marginRight: '1vh'}}>
            <button style={{backgroundColor: 'transparent',color: 'red', border: 'none', fontWeight:'bold'}} onClick={() => deleteItem(item.id)}>X</button>
        </div>
    </div>
  )
}

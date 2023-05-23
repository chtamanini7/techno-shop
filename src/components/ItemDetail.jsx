import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import {  ItemContext } from '../context/ItemContext'
import { CartContext } from '../context/CartContext'

export default function ItemDetail({item}) {
  const [status, setStatus] = useState(true);
  const initVal = item.data.quantity > 0 ? 1 : 0;
  const {addToCart} = useContext(CartContext);

  const onAdd = (productQuantity) => {
    addToCart(item.data, productQuantity);
  }

  return (
    <ItemContext.Provider value={{  status, setStatus }}>
      <Container style={{ border:'1px solid black', width: '50vh', height: '60vh', textAlign: 'center'}}>
        <img src={item.data.img} alt="avatar" width="250" height="300"/>
        <hr/>
        <h3>{item.data.name}</h3>
        <h3>${item.data.price}</h3>
        <p>{item.data.desc}</p>
          {status ? <ItemCount initial={initVal} stock={item.data.quantity} onAdd={onAdd} /> : 
            <div>
              <Link to={'/'}><Button>Seguir Comprando</Button></Link>
              <Link to={'/cart'}><Button>Terminar Compra</Button></Link>
            </div>
          }
      </Container>
    </ItemContext.Provider>
  )
}

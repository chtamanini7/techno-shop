import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function ItemDetail({item}) {
  const [status, setStatus] = useState(true);
  const initVal = item.data.quantity > 0 ? 1 : 0;
  const {addToCart} = useContext(CartContext);

  const onAdd = (productQuantity) => {
    addToCart(item, productQuantity);
    setStatus((prev) => !prev);
  }
  

  return (
      <Container style={{ border:'1px solid black', width: '50vh', minHeight: '60vh', textAlign: 'center'}}>
        <img src={item.data.img} alt="avatar" width="250" height="300"/>
        <hr/>
        <h3>{item.data.name}</h3>
        <h3>${item.data.price}</h3>
        <p>{item.data.desc}</p>
          {status ? <ItemCount initial={initVal} stock={item.data.quantity} onAdd={onAdd} /> : 
            <div style={{maxWidth: '20vh', marginLeft: '29%'}}>
              <Link to={'/'}><button className='itemdetail-second-button'>❮  Seguir Comprando</button></Link>
              <Link to={'/cart'}><button className='itemdetail-second-button'>Terminar Compra ❯</button></Link>
            </div>
          }
      </Container>
  )
}

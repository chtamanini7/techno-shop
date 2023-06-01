import React, { useContext, useState} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem'
import OrderPage from './OrderPage';

export default function Cart() {
  const [orderFlag, setOrderFlag] = useState(true);
  const {cartList, total} = useContext(CartContext);

  const handleFinishButton = () => {
    setOrderFlag(orderFlag => !orderFlag);
    if (orderFlag) window.scrollTo(0,600); else window.scrollTo(0,-500);
  }

  return (
    <Container>
        <div style={{maxWidth: '200vh', marginTop: '3vh', display: 'flex', flexDirection: 'column'}}>
            { cartList.map((item) => <CartItem key={item.name} item={item} />)}
        </div>
          {cartList.length < 1 ? 
            <div>
              <h2 style={{textAlign:'center', marginBlock:'5vh'}}>Actualmente no hay items en tu Carrito</h2>
              <Link to={'/'}><button className='cart-button-keepbuying' style={{marginInline: '35%', width: '30%'}}>Volver a Comprar</button></Link>
            </div> :
            <div>
              <hr/>
              <div className='cart-total'>
                <h3 className='cart-total-item'>Total:</h3>
                <h4 className='cart-total-item'>${total}</h4>
              </div>
              <hr/>
              <div className='cart-button'>
                <Link to={'/'}><button className='cart-button-keepbuying'>Seguir Comprando</button></Link>
                <button className='cart-button-finish' onClick={handleFinishButton}>▼ Finalizar Compra</button>
              </div>
            </div>
            }
            {orderFlag ? <></> : <OrderPage cartList={cartList} />}
        
    </Container>
  )
}
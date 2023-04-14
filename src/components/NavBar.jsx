import React from 'react'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <div className='navbar-main'>
        <h1>Techno Shop</h1>
        <div className='navbar-menu'>
            <a href='#' className='button-navbar'>Remeras</a>
            <a href='#' className='button-navbar'>Hoodies</a>
            <a href='#' className='button-navbar'>Gorras</a>
            <CartWidget/>
        </div>
    </div>
  )
}

import React from 'react'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <div className='navbar-main'>
        <img src="img/logo.png" alt="" width="82" height="82"/>
        <div className='navbar-menu'>
            <a href='#' className='button-navbar'>Remeras</a>
            <a href='#' className='button-navbar'>Hoodies</a>
            <a href='#' className='button-navbar'>Gorras</a>
            <CartWidget/>
        </div>
    </div>
  )
}

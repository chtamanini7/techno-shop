import React from 'react'
import Item from './Item'

export default function ItemList({products}) {
  return (
    <>
        {  <h5>Loading...</h5> && products.map((product) => 
            <Item item={product} />
        )}
    </>
  )
}

import React from 'react'
import { Container } from 'react-bootstrap'

export default function ItemDetail({item}) {
  return (
    <Container style={{ border:'1px solid black', width: '50vh', height: '55vh', textAlign: 'center'}}>
      <img src={item.img} alt="avatar" width="250" height="300"/>
      <hr/>
      <h5>id: {item.id}</h5>
      <h3>{item.name}</h3>
      <h3>${item.price}</h3>
      <h5>Stock: {item.quantity}</h5>
    </Container>
  )
}

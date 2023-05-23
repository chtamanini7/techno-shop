import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Item from './Item'
import loadcat from '../img/loadcat.gif'

export default function ItemList({products}) {
  if(products.length < 1){
    return <Container style={{ textAlign: 'center'}}><img src={loadcat} alt='gatogordo' /></Container>
  }

  return (
    <Row xs={1} md={4} className="g-4">
        { products.map((product) => 
          <Col>
            <Item key={product.id} item={product} />
          </Col>
        )}
    </Row>
  )
}

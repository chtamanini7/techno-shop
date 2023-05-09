import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from './Item'
import loadcat from '../img/loadcat.gif'

export default function ItemList({products}) {
  return (
    <Row xs={1} md={4} className="g-4">
        {  !products.length ? <img src={loadcat} alt='gatogordo' style={{ justifyItems: 'center'}}/> : products.map((product) => 
          <Col>
            <Item key={product.id} item={product} />
          </Col>
        )}
    </Row>
  )
}

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Item({item}) {
  return (
      <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.desc}
          </Card.Text>
          <Link to={`/item/${item.id}`} ><Button variant="primary">Details</Button></Link>
        </Card.Body>
      </Card>
  )
}

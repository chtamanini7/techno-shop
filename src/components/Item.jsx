import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Item({item}) {
  return (
      <Card style={{ minWidth: '18vh' }} >
        <Card.Img variant="top" src={item.data.img} />
        <Card.Body>
          <Card.Title>{item.data.name}</Card.Title>
          <Card.Text>
            {item.data.desc}
          </Card.Text>
          <Link to={`/item/${item.id}`} ><Button variant="primary">Details</Button></Link>
        </Card.Body>
      </Card>
  )
}

import React from 'react'
import {Button, Card} from 'react-bootstrap/';

export default function CardComponet(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.portada} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.sinopsis}
        </Card.Text>
        <Button variant="primary">Ver Detalle</Button>
      </Card.Body>
    </Card>
  )
}

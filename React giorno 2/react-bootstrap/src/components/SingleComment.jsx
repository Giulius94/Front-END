import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFillStarFill } from "react-icons/bs";



export default class SingleComment extends Component {

  render() {
  
    return (
        this.props.arrayCommenti.map((u, index) => (
            <ListGroup key={index} className='mt-3 mb-3'>
                <ListGroup.Item>Commento :{u.comment}</ListGroup.Item>
                <ListGroup.Item>Voto : {u.rate} <BsFillStarFill/> </ListGroup.Item>
            </ListGroup>
        ))
    )
  }
}

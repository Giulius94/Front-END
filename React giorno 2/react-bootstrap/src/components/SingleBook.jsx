/* import React from 'react'
import { Card } from 'react-bootstrap'

export default function SingleBook({ book }) {
    return (
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    {book.category}
                </Card.Text>
                <Card.Text>
                    {book.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
} */

import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class SingleBook extends Component {

    state = {
        selected : false
    }


  render() {
    return (
        <Card style={{ width: '25rem' }} className={this.state.selected === true ? "selected-book" : ""}>
        <Card.Img 
        variant="top" 
        src={this.props.book.img} 
        onClick={() => this.setState((prevState) =>({selected : !prevState.selected}))} />
        <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
                {this.props.book.category}
            </Card.Text>
            <Card.Text>
                {this.props.book.price}
            </Card.Text>
        </Card.Body>
    </Card>
    )
  }
}

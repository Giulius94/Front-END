import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';

export default class MyNav extends Component {
    render() {
        return (
            <Nav className='bg-dark mb-5 fixed-top' >
                <Nav.Item>
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">Browse</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function Welcome() {
    return (
            <Container className='bg-primary rounded mt-5'>
                <h1>Hello, world!</h1>
                <p>
                    Welcome to my Library
                </p>
                <Button className="bg-success">Learn more</Button>
            </Container>
    )
}

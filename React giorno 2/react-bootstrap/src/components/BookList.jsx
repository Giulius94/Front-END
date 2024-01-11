import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from './SingleBook'

export default function BookList({ books }) {
    return (
        <>
            <Row>
                {books.map((book, index) => (
                    <Col xs={12} md={4} className='my-5' key={index}>
                        <SingleBook book = {book} valIndex = {index}/>
                    </Col>
                ))}
            </Row>
        </>

    )
}

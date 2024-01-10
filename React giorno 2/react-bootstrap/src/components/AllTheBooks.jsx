/* import { Card, Col, Row } from 'react-bootstrap'
import Fantasy from '../data/books/fantasy.json' */


/*const AllTheBooks = () => {
    console.log(fantasy)

    return (
        <Row>
            {fantasy.map((book) => {
                return (
                    //<Col xs={12} md={4} key={book.asin}>
                       //<Card className="book-cover">
                         //<Card.Img variant="top" src={book.img} />
                         //<Card.Body>
                           //<Card.Title>{book.title}</Card.Title>
                         //</Card.Body>
                       //</Card>
                     //</Col> 
                        <Col xs={12} md={4} className='my-5'>
                            <Card style={{ width: '25rem' }} key={book.asin}>
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
                        </Col>
                )
            })}
        </Row>
    )
} */

/* export default AllTheBooks */

import React, { Component } from 'react'
import Fantasy from '../data/books/fantasy.json'
import BookList from './BookList'
import { Form, Col, Row, Button } from 'react-bootstrap'

export default class AllTheBooks extends Component {

    state = {
        /* books : {} */
        books: [],
        searchQuery: '',
        filterBooks : []
    }

    componentDidMount() {
        /*  this.setState({
             books : {
                 ...this.state.books,
                 fantasy : Fantasy
             }
         }) */

        this.setState({
            books: [...Fantasy]
        })
    }

    getSearchQuery = () => {
        this.setState({filterBooks : this.state.books.filter(book => book.title.includes(this.state.searchQuery))})
    }

    render() {
       /*  console.log(this.state.searchQuery) */
        return (
            <>
                <Row className='my-5'>
                    <Form.Label column="lg" lg={2}>
                        Search Book
                    </Form.Label>
                    <Col lg='8'>
                        <Form.Control
                            size="md"
                            type="text"
                            placeholder="Search Book Title"
                            onChange={(e)=> this.setState({searchQuery : e.target.value })} />
                    </Col>
                    <Col lg='2'>
                        <Button variant='success' onClick={this.getSearchQuery}>Search</Button>
                    </Col>
                </Row>
                <BookList books={this.state.filterBooks.length !== 0 ? this.state.filterBooks : this.state.books} />
                {/*  <Row>
                    {this.state.books.map((book, index) => (
                        <Col xs={12} md={4} className='my-5' key={index}>
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
                        </Col>
                    ))}
                </Row> */}
            </>

        )
    }
}

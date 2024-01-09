import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../data/books/fantasy.json'

const AllTheBooks = () => {
    console.log(fantasy)

    return (
        <Row>
            {fantasy.map((book) => {
                return (
                    /*  <Col xs={12} md={4} key={book.asin}>
                       <Card className="book-cover">
                         <Card.Img variant="top" src={book.img} />
                         <Card.Body>
                           <Card.Title>{book.title}</Card.Title>
                         </Card.Body>
                       </Card>
                     </Col> */
                        <Col xs={12} md={4} className='my-5'>
                            <Card style={{ width: '18rem' }} key={book.asin}>
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
}

export default AllTheBooks
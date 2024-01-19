import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavourites } from '../action'

export default function Job({ data }) {

  const dispatch = useDispatch()

  return (
    <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      </Col>
      <Col xs={2}>
      <Button variant="info" onClick={()=> dispatch(addFavourites(data))}> Save Favourite</Button>
      </Col>
  </Row>
  )
}

import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeFavourite } from '../slice/favouritesSlice'

export default function MyFavourites({e}) {

    const dispatch = useDispatch()

  return (
        <Row>
          <Col xs={3}>
            <p>{e.company_name}</p>
          </Col>
       <Col xs={7}>
          <p>{e.category}</p>
       </Col>
       <Col xs={2}>
         <Button variant="info" onClick={()=> dispatch(removeFavourite(e.title))}>Remove</Button>
       </Col>
       </Row>
  )
}

import React from 'react'
import { Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MyFavourites from './MyFavourites'
export default function Favourites() {

  const navigate = useNavigate()

  const jobList = useSelector(state => state)
  console.log(jobList)

  return (
    <>
      <div className='d-flex justify-content-around mt-5 mb-5'>
        <h1>My Favourites</h1>
        <Button variant="info" onClick={() => navigate('/')}>Back to Home</Button>
      </div>
      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        {jobList && jobList.map((e, index) => <MyFavourites e={e} key={index} />)}
      </Row>
    </>
  )
}

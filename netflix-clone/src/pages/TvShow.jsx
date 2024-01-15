import React from 'react'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import MovieDetails from './MovieDetails'

export default function TvShow() {

  const navigate = useNavigate()

  return (
    <div className='d-flex'>
    <h1 className='text-white mx-5'>Hello</h1>
    <Button variant="outline-info" onClick={() => navigate("/")}>HomePage</Button>
    </div>
  )
}

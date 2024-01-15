import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function MovieDetails() {

    const { id } = useParams()

    useEffect(() => {
        axios.get(''+id)
              .then(response => {
                  if(response.status === 200) {
                    
                  } else {
                      console.log("Errore Server!!!")
                  }
              }).catch(error => console.error(error))
      }, [])

  return (
    <div>MovieDetails</div>
  )
}

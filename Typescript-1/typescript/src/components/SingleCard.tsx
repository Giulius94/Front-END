import { Button, Card } from 'react-bootstrap'
import IUser from '../Interfaces/IUsers'
import { useNavigate } from 'react-router-dom'


interface IProps {
    e:IUser,
    index: number
}

export default function SingleCard({e,index}:IProps) {

    const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem' }} className='mt-5'>
    <Card.Img variant="top" src={e.image_url} />
    <Card.Body key={index}>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
            {e.summary}
        </Card.Text>
        <Card.Text>
            Published: {e.published_at}
        </Card.Text>
        <Card.Text>
            {e.news_site}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate("/details/"+ e.id)}>Details</Button>
    </Card.Body>
</Card>
  )
}

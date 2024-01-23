import { useEffect, useState } from 'react'
import {Container } from 'react-bootstrap';
import Articles from './Articles';
import IUser from '../Interfaces/IUsers';


export default function HomePage() {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
            .then(response => response.json())
            .then(json => setUsers(json.results))
    }, [])


    return (
    <Container className='d-flex flex-wrap justify-content-around'>
                <Articles users={users}/>
        </Container> 
    )
}

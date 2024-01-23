import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IUser from '../Interfaces/IUsers';

export default function Details() {

    const { id } = useParams();

    const [single,setSingle] = useState<IUser>()

    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles/'+ id)
            .then(response => response.json())
            .then(json => console.log(json.data))
    }, [])

  return (
    <div>Details</div>
  )
}

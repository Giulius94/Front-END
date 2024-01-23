import IUser from '../Interfaces/IUsers'
import SingleCard from './SingleCard'

interface IProps {
    users: IUser[]

}

export default function Articles({users}:IProps) {
  return (
    <>
    {users.map((e,index) =>
    <SingleCard e={e} index={index}/>
        )}
    </>
  )
}



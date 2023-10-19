import { useGetUsersQuery } from '../services/index.js'
import { useDispatch } from 'react-redux'
import { addUsers } from '../userSlice/index.js'
import { useEffect } from 'react'
import UserCard from '../components/UserCard.jsx'
import '../styles/Home.scss'
import useGetUsers from '../hooks/useGetUsers.js'

const Home = () => {
  const { data, error, isLoading } = useGetUsersQuery()
  const users = useGetUsers()
  const dispatch = useDispatch()
  error && console.error(error)
  useEffect(() => {
    if (data?.data?.length > 0) {
      dispatch(addUsers(data.data))
    }
  }, [data])
  return (
  <>
    <h1>Users</h1>
    <div className='usersBox'>
      {
        isLoading && <li>is loading...</li>
      }
      {
        users && users.map(user => (
          <UserCard
            key={user.id}
            name={`${user.first_name} ${user.last_name}`}
            img={user.avatar}
            email={user.email} uid={user.id}/>
        ))
      }
    </div>
  </>
  )
}

export default Home

import { useSelector } from 'react-redux'

function useGetUsers () {
  const users = useSelector((state) => state.users.users)
  return users
}

export default useGetUsers

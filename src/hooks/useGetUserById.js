import { useSelector } from 'react-redux'

function useGetUserById (id) {
  const user = useSelector((state) => state.users.users.find((user) => user.id === id))
  return user
}

export default useGetUserById

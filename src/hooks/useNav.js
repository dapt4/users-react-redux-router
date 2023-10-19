import { useNavigate } from 'react-router-dom'

function useNav (url) {
  const navigate = useNavigate()
  return (url) => navigate(url)
}

export default useNav

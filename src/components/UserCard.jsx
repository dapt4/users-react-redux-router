import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

function UserCard ({ uid, name, email, img }) {
  const navigate = useNavigate()
  const naviHandler = (uid) => navigate('/detail/' + uid)
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" style={{ width: '100%', height: 'auto' }} src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Button variant="primary" onClick={() => naviHandler(uid)}>
            Detail
        </Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard

// import { useGetUserByIdQuery } from '../services/index.js'
import { useParams } from 'react-router-dom'
import useGetUserById from '../hooks/useGetUserById.js'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Col, Container, Row } from 'react-bootstrap'
import useNav from '../hooks/useNav.js'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../userSlice/index.js'

const Detail = () => {
  const { id } = useParams()
  // const { data } = useGetUserByIdQuery(id)
  const uid = parseInt(id)
  const user = useGetUserById(uid)
  const navigate = useNav()
  const dispatch = useDispatch()
  const editUser = (id) => {
    navigate('/edit/' + id)
  }
  const deleteUserHandler = async (id) => {
    const url = 'https://reqres.in/api/users?id=' + id
    const res = await fetch(url)
    console.log(await res.json())
    if (res.status >= 200 && res.status < 300) {
      dispatch(deleteUser(id))
      navigate('/')
    }
  }
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        <Col xs={3}>
          <h1>User detail</h1>
        </Col>
      </Row>
      {
        user && (
          <Row className="justify-content-md-center">
            <Col xs={4}>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={user.avatar} />
                <Card.Body>
                  <Card.Title>full name: {user.first_name} {user.last_name}</Card.Title>
                  <Card.Text>
                    Email: {user.email}
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={() => editUser(user.id)} variant="warning">edit</Button>
                    <Button onClick={() => deleteUserHandler(user.id)} variant="danger">delete</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )
      }
    </Container>
  )
}

export default Detail

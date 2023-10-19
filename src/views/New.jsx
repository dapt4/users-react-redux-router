import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useParams } from 'react-router-dom'
import useGetUserById from '../hooks/useGetUserById.js'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser, editUser } from '../userSlice/index.js'
import useNav from '../hooks/useNav.js'
import { v4 as uuidv4 } from 'uuid'

const New = _ => {
  const type = window.location.href.includes('new') ? 'New' : 'Edit'
  const { id } = useParams()
  const uid = parseInt(id)
  const user = useGetUserById(uid)
  const dispatch = useDispatch()
  const navigate = useNav()
  const initialState = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    avatar: ''
  }
  const [formState, setFormState] = useState(initialState)
  const inputHandler = (event) => {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const url = 'https://jsonplaceholder.typicode.com/posts/'
    const body = formState
    if (body.id === 0) {
      body.id = uuidv4()
    }
    const url2 = type === 'New' ? url : url + id
    const res = await fetch(url2, {
      method: type === 'New' ? 'POST' : 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    })
    await res.json()
    if (res.status >= 200 && res.status < 300) {
      console.log('done')
      if (type === 'New') {
        dispatch(addUser(body))
      } else {
        dispatch(editUser(body))
      }
    }
    navigate('/')
  }
  useEffect(() => {
    if (user && type === 'Edit') {
      setFormState(user)
    } else {
      setFormState(initialState)
    }
  }, [user])
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={3}>
          <h1>{type} User</h1>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First name: </Form.Label>
              <Form.Control onInput={inputHandler} value={formState.first_name} name="first_name" type="text" placeholder="john" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last name: </Form.Label>
              <Form.Control onInput={inputHandler} value={formState.last_name} name="last_name" type="text" placeholder="doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control onInput={inputHandler} value={formState.email} name="email" type="email" placeholder="example@mail.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Avatar string: </Form.Label>
              <Form.Control onInput={inputHandler} value={formState.avatar} name="avatar" type="text" placeholder="https://avatar-site/my-avatar" />
            </Form.Group>
            {
              type === 'New' && (
                <Button variant="primary" type="submit">
                  Create user
                </Button>
              )
            }
            {
              type === 'Edit' && (
                <Button variant="warning" type="submit">
                  Edit user
                </Button>
              )
            }
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default New

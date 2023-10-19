import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './views/Home.jsx'
import Detail from './views/Detail.jsx'
import New from './views/New.jsx'
import store from './store'
import { Provider } from 'react-redux'
import NavigationBar from './components/NavigationBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <NavigationBar>
        <Home/>
      </NavigationBar>
    )
  },
  {
    path: '/detail/:id',
    element: (
      <NavigationBar>
        <Detail/>
      </NavigationBar>
    )
  },
  {
    path: '/new',
    element: (
      <NavigationBar>
        <New/>
      </NavigationBar>
    )
  },
  {
    path: '/edit/:id',
    element: (
      <NavigationBar>
        <New/>
      </NavigationBar>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)

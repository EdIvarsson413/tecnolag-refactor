import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout  from './components/Layout'
import Index from './pages/Index'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Productos from './pages/Productos'
import Contactanos from './pages/Contactanos'
import ErrorPage from './components/ErrorPage'


// Historial de rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Index/>,
      },
      {
        path: '/sobre-nosotros',
        element: <Nosotros/>,
      },
      {
        path: '/servicios',
        element: <Servicios/>,
      },
      {
        path: '/productos',
        element: <Productos/>,
      },
      {
        path: '/contactanos',
        element: <Contactanos/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

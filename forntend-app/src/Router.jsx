import {
    createBrowserRouter,
  } from 'react-router-dom'

  import Login from './pages/Login'
  import RootLayout from './layout/RootLayout'
  import Dashboard from './pages/Dashboard'
export const router=createBrowserRouter([
{
    path:'/',
    element:<Login/>
},
{
    path:'/home',
    element:<RootLayout/>,
    children:[
        {path:'',
        element:<Dashboard/>
        }
    ]
}
])
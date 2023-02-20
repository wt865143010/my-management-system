import { useRoutes } from 'react-router-dom'
import BasicLayout from '../layout/BasicLayout'
import Home from '../pages/home'
import User from '../pages/user'

const routes = [
    {
        path:'/',
        element:<BasicLayout/>,
        children:[
            {
                path:'home',
                element:<Home />,
            },
            {
                path:'user',
                element:<User />,
            }
        ]
    }
]

const Routes = ()=>useRoutes(routes)

export default Routes
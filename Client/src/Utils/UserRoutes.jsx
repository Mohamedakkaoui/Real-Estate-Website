import {isAuth} from './IsAuth'
import { Navigate , Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  
    return (
      isAuth() 
          ? <Outlet /> 
          :<> 
              <Navigate to='/Register'/>
          </> 
    )
  }
  export default PrivateRoute


export const UserRoute = () => {
  
  return (
    isAuth() ?  <> <Navigate to='/Home' />  </> : <Outlet />
  )
}
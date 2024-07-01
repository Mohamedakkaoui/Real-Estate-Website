import { ContextAuth } from '../Context/AuthContext'
import Unauthorized from './Unauthorized'

const PrivateRoute = ({element : Component}) => {
  const {  isLoggedIn } = ContextAuth()
    return (
      isLoggedIn ? <Component/> : <Unauthorized/>
    )
  }
export default PrivateRoute
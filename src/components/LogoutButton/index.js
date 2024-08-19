import './index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login') // Ensure history.replace('/login') is called
  }
  return (
    <button onClick={onLogoutClicked} type="button">
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)

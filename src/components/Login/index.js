import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  onLoginClicked = async () => {
    const userDetails = {
      username: 'praneetha',
      password: 'praneetha@2021',
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props

      Cookies.set('jwt_token', data.jwt_token, {expires: 30}) // Ensure Cookies.set is called with three arguments
      history.replace('/') // Ensure history.replace('/') is called
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="loginContainer">
        <h1>Please Login</h1>
        <button onClick={this.onLoginClicked} type="button">
          Login with sample creds
        </button>
      </div>
    )
  }
}

export default Login

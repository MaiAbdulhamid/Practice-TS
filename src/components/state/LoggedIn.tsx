import { Fragment, useState } from "react"

export const LoggedIn = () => {
  const [isLogged, setIsLogged] = useState(false)
  const handleLogin = () => {
    setIsLogged(true)
  }
  const handleLogout = () => {
    setIsLogged(false)
  }
  return (
    <Fragment>
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleLogout} >Log Out</button>
      <div>User is {isLogged ? 'Logged In' : 'Logged Out'}</div>
    </Fragment>

  )
}
import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
  const userContext = useContext(UserContext)
  const handleLogin = () => {

    userContext.setUser({
      name: 'Mai Abdulhamid',
      email: 'mai@mai.com'
    })

  }
  const handleLogout = () => {

    userContext.setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleLogout} >Log Out</button>
      <div>User name is: {userContext.user?.name}</div>
      <div>User email is: {userContext.user?.email}</div>
    </div>

  )
}
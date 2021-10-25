import { Fragment, useState } from "react"

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  /*
  // Set the initial value of user as null but it can be changed to the AuthUser type
  // const [user, setUser] = useState<AuthUser | null>(null)
  */

  // useState Type Assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Mai Abdulhamid',
      email: 'mai.abdelhameed95@gmail.com'
    })
  }
  // const handleLogout = () => {
  //   setUser(null)
  // }
  return (
    <Fragment>
      <button onClick={handleLogin} >Login</button>
      {/* <button onClick={handleLogout} >Log Out</button> */}
      <div>User Name is: {user?.name} </div>
      <div>User Email is: {user?.email} </div>
    </Fragment>

  )
}
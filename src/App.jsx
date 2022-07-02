import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({})

const Login = (props) => {
  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    props.updateUser({id: 1, name: 'Deko', age: 40})
  },[])

  return (
    <div style={{background: 'green'}}>
    <h1>Name from login: {user.name}</h1>
    <h1>Age from login: {user.age}</h1>
    <h1>{'This is log in'}</h1>
    </ div>
  )
}

const Logout = (props) => {
  const [user, setUser] = useContext(UserContext)

  return (
    <div style={{background: 'grey'}}>
    <h1>Name from logout: {user.name}</h1>
    <h1>Age from logout: {user.age}</h1>
    <button type="button" onClick={() => setUser({})}> Log out</button>
    </ div>
    )
}

const NavBar = (props) => {
  return (
    <>
      <Logout />
    </>
  )
}

const App = () => {
  const [user, setUser] = useState({})
  const [showLogin, setShowLogin] = useState(false)

  const updateUser = (newUser) => {
    setUser(newUser)
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <button type="button" onClick={() => setShowLogin(!showLogin)}> Login</button>
      {showLogin && <Login updateUser={updateUser}/>}
      <NavBar />
    </ UserContext.Provider> 
  )
}

export default App
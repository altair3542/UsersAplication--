import { CreateContext, useState, useEffect, createContext } from 'react'


export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([])

  useEffect(()=> {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []
    setUsers(storedUsers)
  }, [])

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  )
}

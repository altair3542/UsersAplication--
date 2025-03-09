import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState(() => {
    // Cargar usuarios desde LocalStorage al iniciar (evita que se borren al recargar)
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  // Guardar en LocalStorage cada vez que `users` cambie
  useEffect(() => {
    console.log("Guardando en LocalStorage:", users);
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

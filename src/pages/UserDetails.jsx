import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function UserDetails() {
  const { users } = useContext(UserContext);
  const { id } = useParams(); // Obtiene el ID desde la URL
  const userIndex = parseInt(id, 10); // Convierte el ID a número entero
  const user = users[userIndex]; // Busca el usuario en la lista

  if (!user) {
    return <p className="text-red-500">⚠ Usuario no encontrado.</p>;
  }

  return (
    <div className="p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="text-gray-700">📧 Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;

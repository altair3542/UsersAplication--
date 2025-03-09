import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function Users() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
      {users.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} className="mb-2">
              <Link to={`/users/${index}`} className="text-blue-500 hover:underline">
                {user.name} ({user.email})
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;

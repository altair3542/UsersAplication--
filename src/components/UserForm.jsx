import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserForm() {
  const { users, setUsers } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, formData];
      console.log("Usuarios actualizados:", updatedUsers); // 👀 Verifica si se actualiza
      return updatedUsers;
    });

    setFormData({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Agregar Usuario</button>
    </form>
  );
}

export default UserForm;

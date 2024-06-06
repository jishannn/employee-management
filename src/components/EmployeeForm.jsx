import { useState } from "react";

export default function EmployeeForm({ employee, onSave }) {
  const [name, setName] = useState(employee ? employee.name : "");
  const [email, setEmail] = useState(employee ? employee.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: employee ? employee.id : null, name, email });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

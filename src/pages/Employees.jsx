import { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList.jsx";
import EmployeeModal from "../components/EmployeeModal.jsx";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    // Load data from localStorage when component mounts
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever employees state changes
    setEmployees((prevEmployees) => {
      localStorage.setItem("employees", JSON.stringify(prevEmployees));
      return prevEmployees;
    });
  }, [employees]);

  const saveEmployee = (employee) => {
    if (employee.id) {
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      employee.id = Date.now();
      setEmployees([...employees, employee]);
    }
    setIsShowing(false);
  };

  const editEmployee = (employee) => {
    setCurrentEmployee(employee);
    setIsShowing(true);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };
  return (
    <div className="container">
      <h1>Employee Management</h1>
      <button
        onClick={() => {
          setCurrentEmployee(null);
          setIsShowing(true);
        }}
      >
        Add Employee
      </button>
      <EmployeeList
        employees={employees}
        onEdit={editEmployee}
        onDelete={deleteEmployee}
      />
      <EmployeeModal
        isShowing={isShowing}
        hide={() => setIsShowing(false)}
        employee={currentEmployee}
        onSave={saveEmployee}
      />
    </div>
  );
}

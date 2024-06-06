import React from "react";
import noDataImage from "../assets/banner.svg";

export default function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <div className="no-data">
          <img src={noDataImage} alt="No Data Available" className="img" />
          <h3>Oops! No lists is available!</h3>
        </div>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id} className="employee-item">
              {employee.name} - {employee.email}
              <div>
                <button onClick={() => onEdit(employee)}>Edit</button>
                <button onClick={() => onDelete(employee.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

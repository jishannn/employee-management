import React from "react";
import ReactDOM from "react-dom";
import EmployeeForm from "../components/EmployeeForm";

const EmployeeModal = ({ isShowing, hide, employee, onSave }) => {
  if (!isShowing) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={hide}>
          X
        </button>
        <EmployeeForm employee={employee} onSave={onSave} />
      </div>
    </div>,
    document.body
  );
};

export default EmployeeModal;

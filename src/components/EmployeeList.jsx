import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EmployeeList = ({ filters, sortBy }) => {
  const employees = useSelector((state) => state.employees);

  const filteredEmployees = employees.filter((employee) => {
    return (
      (!filters.role || employee.role === filters.role) &&
      (filters.isArchive === employee.isArchive)
    );
  });

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'birthday') {
      return new Date(a.birthday) - new Date(b.birthday);
    }
    return 0;
  });

  return (
    <div className="employee-list">
      {sortedEmployees.map(employee => (
        <div key={employee.id} className="employee">
          <Link to={`/edit/${employee.id}`}>
            <h3>{employee.name}</h3>
            <p>{employee.role}</p>
            <p>{employee.phone}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
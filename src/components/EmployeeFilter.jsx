import React from 'react';

const roles = ['cook', 'waiter', 'driver'];

const EmployeeFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="employee-filter">
      <label>
        Должность:
        <select
          value={filters.role}
          onChange={(e) => onFilterChange({ ...filters, role: e.target.value })}
        >
          <option value="">Все</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </label>
      
      <label>
        <input
          type="checkbox"
          checked={filters.isArchive}
          onChange={() => onFilterChange({ ...filters, isArchive: !filters.isArchive })}
        />
        В архиве
      </label>
    </div>
  );
};

export default EmployeeFilter;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateEmployee, addEmployee } from '../slices/employeeSlice';

const roles = ['cook', 'waiter', 'driver'];

const EmployeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const existingEmployee = employees.find(emp => emp.id === parseInt(id));

  const [employee, setEmployee] = useState(
    existingEmployee || { id: Date.now(), name: '', phone: '', birthday: '', role: 'cook', isArchive: false }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmployee({
      ...employee,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingEmployee) {
      dispatch(updateEmployee(employee));
    } else {
      dispatch(addEmployee(employee));
    }
    navigate('/');
  };

  useEffect(() => {
    if (existingEmployee) {
      setEmployee(existingEmployee);
    }
  }, [existingEmployee]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя: <input type="text" name="name" value={employee.name} onChange={handleChange} /></label>
      </div>
      <div>
        <label>Телефон: <input type="text" name="phone" value={employee.phone} onChange={handleChange} /></label>
      </div>
      <div>
        <label>Дата рождения: <input type="text" name="birthday" value={employee.birthday} onChange={handleChange} /></label>
      </div>
      <div>
        <label>Должность: 
          <select name="role" value={employee.role} onChange={handleChange}>
            {roles.map(role => <option key={role} value={role}>{role}</option>)}
          </select>
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="isArchive" checked={employee.isArchive} onChange={handleChange} />
          В архиве
        </label>
      </div>
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default EmployeeForm;
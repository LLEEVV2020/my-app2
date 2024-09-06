import React, { useState } from 'react';
import EmployeeFilter from '../components/EmployeeFilter';
import EmployeeList from '../components/EmployeeList';

const Home = () => {
  const [filters, setFilters] = useState({ role: '', isArchive: false });
  const [sortBy, setSortBy] = useState('name');

  return (
    <div>
      <EmployeeFilter filters={filters} onFilterChange={setFilters} />
      <div>
        <button onClick={() => setSortBy('name')}>Сортировать по имени</button>
        <button onClick={() => setSortBy('birthday')}>Сортировать по дате рождения</button>
      </div>
      <EmployeeList filters={filters} sortBy={sortBy} />
    </div>
  );
};

export default Home;
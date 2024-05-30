// import React from 'react';
import Employees from '../employeesTest.json';
import EmployeeListingSingle from './EmployeeListingSingle';

const EmployeeListing = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {Employees.map(employee => (
            <EmployeeListingSingle key={employee.id} employee={employee} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeListing;

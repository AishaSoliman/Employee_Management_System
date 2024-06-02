import { useEffect, useState } from 'react';
import EmployeeListingSingle from './EmployeeListingSingle';
// import employeesData from '../employeesTest.json'; 
import { Link } from 'react-router-dom';

const EmployeeListing = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from Django API
    fetch('http://127.0.0.1:9000/emp/')
      .then(response => response.json())
      .then(data => setEmployees(data.Employees))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {employees.map(employee => (
            <EmployeeListingSingle key={employee.id} employee={employee} />
          ))}
        </ul>
      </div>
      <Link
        to="/employees/create"
        className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Create Employee
      </Link>
    </div>
  );
};

export default EmployeeListing;

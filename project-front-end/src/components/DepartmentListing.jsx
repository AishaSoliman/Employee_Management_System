// import React from 'react';
import { useEffect, useState } from 'react';
// import Department from '../departmentsTest.json'
import DepartmentListingSingle from './DepartmentListingSingle'

const DepartmentListing = () => {

  const [Department, setDepartment] = useState([]);

  useEffect(() => {
    // Fetch data from Django API
    fetch('http://127.0.0.1:9000/dep/')
      .then(response => response.json())
      .then(data => setDepartment(data.message))
      .catch(error => console.error('Error fetching departmens:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Department List</h2>
      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {Department.map(department => (
            <DepartmentListingSingle key={department.id} department={department} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DepartmentListing;

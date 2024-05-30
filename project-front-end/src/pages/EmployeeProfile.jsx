// import React from 'react';
import { useParams } from 'react-router-dom';
import Employees from '../employeesTest.json';

const EmployeeProfile = () => {
  const { id } = useParams();
  const employee = Employees.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return <div className="text-center text-red-500">Employee not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">{employee.name}</h1>
      <p className="text-gray-700"><span className="font-semibold">Status:</span> {employee.status}</p>
      <p className="text-gray-700"><span className="font-semibold">Department:</span> {employee.department}</p>
      <p className="text-gray-700"><span className="font-semibold">Company:</span> {employee.company}</p>
      <p className="text-gray-700"><span className="font-semibold">Address:</span> {employee.address}</p>
      <p className="text-gray-700"><span className="font-semibold">Mobile Number:</span> {employee.mobile_number}</p>
    </div>
  );
};

export default EmployeeProfile;

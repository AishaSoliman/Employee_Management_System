// import React from 'react';
import { useParams } from 'react-router-dom';
import Department from '../departmentsTest.json'

const DepartmentPage = () => {
  const { id } = useParams();
  const department = Department.find(department => department.id === parseInt(id));

  if (!department) {
    return <div className="text-center text-red-500">Department not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">{department.name}</h1>
      <p className="text-gray-700"><span className="font-semibold">ID:</span> {department.id}</p>
      <p className="text-gray-700"><span className="font-semibold">CompanyID:</span> {department.company}</p>
      <p className="text-gray-700"><span className="font-semibold">ManagerID:</span> {department.manager}</p>
    </div>
  );
};

export default DepartmentPage;

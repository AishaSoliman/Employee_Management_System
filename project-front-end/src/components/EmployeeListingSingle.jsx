// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const EmployeeListingSingle = ({ employee }) => {
  const handleClick = (event) => {
    event.preventDefault();
    toast.info('Good Click!', {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  
  return (
    <li key={employee.id} className="flex items-center justify-between p-4">
      <div>
        <h3 className="text-lg font-medium">{employee.name}</h3>
        <p className="text-sm text-gray-500">Employee ID: {employee.id}</p>
        <p className="text-sm text-gray-500">Mobile: {employee.mobile_number}</p>
        <p className="text-sm text-gray-500">Address: {employee.address}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded ${
            employee.status === 'hired' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {employee.status}
        </span>
        <Link
          to={`/employees/view/${employee.id}`}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
        >
          View Profile
        </Link>
        <Link
          to={`/employees/edit/${employee.id}`}
          className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-blue-300"
        >
          Edit
        </Link>
        <Link
          to=""
          onClick={handleClick}
          className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded hover:bg-red-300 ml-3"
        >
          Delete
        </Link>
      </div>
    </li>
  );
};

EmployeeListingSingle.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default EmployeeListingSingle;

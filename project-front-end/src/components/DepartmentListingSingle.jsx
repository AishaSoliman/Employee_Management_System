// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DepartmentListingSingle = ({ department }) => {
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
    <li key={department.id} className="flex items-center justify-between p-4">
      <div>
        <h3 className="text-lg font-medium">{department.name}</h3>
        <p className="text-sm text-gray-500">Department ID: {department.id}</p>
      </div>
      <div className="flex items-center space-x-4">
        
        <Link
          to={`/departments/view/${department.id}`}
          // onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
        >
          View department
        </Link>
        <Link
          to=''
          onClick={handleClick}
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

DepartmentListingSingle.propTypes = {
  department: PropTypes.object.isRequired,
};

export default DepartmentListingSingle;

// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CompanyListingSingle = ({ company }) => {
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
    <li key={company.id} className="flex items-center justify-between p-4">
      <div>
        <h3 className="text-lg font-medium">{company.name}</h3>
        <p className="text-sm text-gray-500">company ID: {company.id}</p>
      </div>
      <div className="flex items-center space-x-4">
        
        <Link
          to={`/companies/view/${company.id}`}
        //   onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600"
        >
          View company
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

CompanyListingSingle.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyListingSingle;

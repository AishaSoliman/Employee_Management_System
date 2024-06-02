// import React from 'react';
import { useEffect, useState } from 'react';
// import Company from '../companyTest.json'
import CompanyListingSingle from './CompanyListingSingle';
const CompanyListing = () => {

  const [Company, setCompany] = useState([]);

  useEffect(() => {
    // Fetch data from Django API
    fetch('http://127.0.0.1:9000/company/')
      .then(response => response.json())
      .then(data => setCompany(data.message))
      .catch(error => console.error('Error fetching Company:', error));
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Company List</h2>
      <div className="bg-white shadow rounded-lg">
        <ul className="divide-y divide-gray-200">
          {Company.map(company => (
            <CompanyListingSingle key={company.id} company={company} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyListing;

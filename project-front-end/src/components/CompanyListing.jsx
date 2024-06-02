// import React from 'react';

import Company from '../companyTest.json'
import CompanyListingSingle from './CompanyListingSingle';
const CompanyListing = () => {
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

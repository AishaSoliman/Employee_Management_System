// import React from 'react';
import { useParams } from 'react-router-dom';

import Company from '../companyTest.json'

const CompanyPage = () => {
  const { id } = useParams();
  const company = Company.find(company => company.id === parseInt(id));

  if (!company) {
    return <div className="text-center text-red-500">Employee not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">{company.name}</h1>
      <p className="text-gray-700"><span className="font-semibold">ID:</span> {company.id}</p>
    </div>
  );
};

export default CompanyPage;

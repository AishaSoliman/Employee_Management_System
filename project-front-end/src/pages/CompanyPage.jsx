// import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
// import Company from '../companyTest.json'

const CompanyPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:9000/company/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCompany(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!company) {
    return <div className="text-center text-red-500">Department not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">{company.name}</h1>
      <p className="text-gray-700"><span className="font-semibold">ID:</span> {company.id}</p>
    </div>
  );
};

export default CompanyPage;

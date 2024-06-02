import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeProfile = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:9000/emp/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmployee(data.employee);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
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

  if (!employee) {
    return <div className="text-center text-red-500">Employee not found</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10 p-6">
      <h1 className="text-2xl font-bold mb-4">{employee.name}</h1>
      <p className="text-gray-700">
        <span className="font-semibold">Status:</span> {employee.status}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Department:</span> {employee.department}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Company:</span> {employee.company}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Address:</span> {employee.address}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Mobile Number:</span>{" "}
        {employee.mobile_number}
      </p>
    </div>
  );
};

export default EmployeeProfile;

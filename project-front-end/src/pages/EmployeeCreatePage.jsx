import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeCreatePage = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: '',
    status: '',
    name: '',
    mobile_number: '',
    address: '',
    company: '',
    department: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for adding new employee data
    navigate('/employees'); // Redirect back to the employee list
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={employee.status}
            onChange={(e) => setEmployee({ ...employee, status: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile_number">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile_number"
            name="mobile_number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={employee.mobile_number}
            onChange={(e) => setEmployee({ ...employee, mobile_number: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={employee.address}
            onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={employee.company}
            onChange={(e) => setEmployee({ ...employee, company: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
            Department
          </label>
          <input
            type="text"
            id="department"
            name="department"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={employee.department}
            onChange={(e) => setEmployee({ ...employee, department: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EmployeeCreatePage;

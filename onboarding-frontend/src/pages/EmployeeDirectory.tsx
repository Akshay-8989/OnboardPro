import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
}

const EmployeeDirectory: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get<Employee[]>('/api/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error('Failed to fetch employees:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <div className="text-center py-6">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="border rounded p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{emp.name}</h3>
            <p className="text-sm text-gray-700">{emp.email}</p>
            <p className="text-sm">Role: {emp.role}</p>
            <p className="text-sm">Department: {emp.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeDirectory;

import React from 'react';

const TeamDirectory = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Team Directory</h1>

    <p className="mb-4 text-gray-700">
      Browse the list of employees and find people by department or role.
    </p>

    <ul className="text-gray-800 space-y-3">
      <li><strong>👨‍💼 Rajesh Kumar</strong> – Head of Engineering – rajesh@company.com</li>
      <li><strong>👩‍💼 Aarti Desai</strong> – HR Manager – aarti@company.com</li>
      <li><strong>🧑‍💻 Pranav Joshi</strong> – Frontend Developer – pranav@company.com</li>
      <li><strong>🧑‍💼 Meera Nair</strong> – Marketing Lead – meera@company.com</li>
      <li><strong>🧑‍🔧 Shubham Patil</strong> – IT Support – shubham@company.com</li>
    </ul>
  </div>
);

export default TeamDirectory;

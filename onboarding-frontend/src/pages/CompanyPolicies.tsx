import React from 'react';

const CompanyPolicies = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Company Policies</h1>
    <p className="mb-4 text-gray-700">
      Below are the core policies that guide our operations, employee conduct, and workplace culture:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-800">
      <li><strong>Code of Conduct:</strong> All employees are expected to maintain professional and respectful behavior in the workplace.</li>
      <li><strong>Leave Policy:</strong> Includes paid leave, sick leave, emergency leave, and guidelines for leave approval.</li>
      <li><strong>Remote Work Policy:</strong> Outlines eligibility, expectations, and security protocols for remote employees.</li>
      <li><strong>IT and Security Policy:</strong> Details acceptable use of company devices, software, and data protection guidelines.</li>
      <li><strong>Equal Opportunity Policy:</strong> We are committed to a diverse, inclusive, and non-discriminatory work environment.</li>
      <li><strong>Grievance Redressal Policy:</strong> Steps for reporting and resolving workplace issues confidentially and fairly.</li>
    </ul>
  </div>
);

export default CompanyPolicies;

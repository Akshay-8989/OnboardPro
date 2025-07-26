import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: "Company Policies", url: "/company-policies" },
  { name: "Latest Announcements", url: "/announcements" },
  { name: "Internal Tools", url: "/internal-tools" },
  { name: "Knowledge Base", url: "/knowledge-base" },
  { name: "Team Directory", url: "/team-directory" }
];

const Intranet = () => {
  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Company Intranet</h2>
      <p className="mb-6 text-gray-600">
        Your gateway to internal company resources and updates.
      </p>

      <ul className="space-y-4">
        {links.map(link => (
          <li key={link.name} className="bg-white shadow p-4 rounded hover:bg-blue-50">
            <Link to={link.url} className="text-blue-600 font-medium">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Intranet;

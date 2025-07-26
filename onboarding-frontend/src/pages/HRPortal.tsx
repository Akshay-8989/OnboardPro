// src/pages/HRPortal.tsx
import React, { useState } from 'react';

const HRPortal = () => {
  const [leaveForm, setLeaveForm] = useState({
    type: 'Sick Leave',
    from: '',
    to: '',
    reason: '',
  });

  const [submittedLeaves, setSubmittedLeaves] = useState<any[]>([]);
  const [checklist, setChecklist] = useState({
    documentsUploaded: false,
    bankDetailsFilled: false,
    trainingCompleted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setLeaveForm({ ...leaveForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!leaveForm.from || !leaveForm.to || !leaveForm.reason) return;
    setSubmittedLeaves([...submittedLeaves, leaveForm]);
    setLeaveForm({ type: 'Sick Leave', from: '', to: '', reason: '' });
  };

  return (
    <div className="p-6 text-gray-800 max-w-5xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">HR Portal</h2>

      {/* Leave Application */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">📝 Apply for Leave</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1 font-medium">Leave Type</label>
            <select
              name="type"
              value={leaveForm.type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Earned Leave</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">From Date</label>
            <input
              type="date"
              name="from"
              value={leaveForm.from}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm mb-1 font-medium">To Date</label>
            <input
              type="date"
              name="to"
              value={leaveForm.to}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1 font-medium">Reason</label>
            <textarea
              name="reason"
              value={leaveForm.reason}
              onChange={handleChange}
              placeholder="Reason for leave"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md transition"
        >
          Submit Leave
        </button>

        {submittedLeaves.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">📄 Submitted Leaves:</h4>
            <ul className="list-disc ml-6 space-y-1">
              {submittedLeaves.map((leave, index) => (
                <li key={index}>
                  <span className="font-medium">{leave.type}</span> from {leave.from} to {leave.to}: {leave.reason}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Leave Balance */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">📊 Leave Balance</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <li className="bg-blue-100 p-4 rounded shadow">Sick Leave: <span className="font-bold">5 days</span></li>
          <li className="bg-green-100 p-4 rounded shadow">Casual Leave: <span className="font-bold">3 days</span></li>
          <li className="bg-yellow-100 p-4 rounded shadow">Earned Leave: <span className="font-bold">7 days</span></li>
        </ul>
      </section>

      {/* Salary Slips */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">💰 Salary Slips</h3>
        <ul className="list-disc ml-6">
          <li>
            <a href="/dummy-salary-may.pdf" target="_blank" className="text-blue-600 hover:underline">
              May 2025
            </a>
          </li>
          <li>
            <a href="/dummy-salary-june.pdf" target="_blank" className="text-blue-600 hover:underline">
              June 2025
            </a>
          </li>
        </ul>
      </section>

      {/* Onboarding Checklist */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">✅ Onboarding Checklist</h3>
        <ul className="space-y-3">
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checklist.documentsUploaded}
                onChange={() =>
                  setChecklist({ ...checklist, documentsUploaded: !checklist.documentsUploaded })
                }
                className="mr-2"
              />
              Upload Documents
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checklist.bankDetailsFilled}
                onChange={() =>
                  setChecklist({ ...checklist, bankDetailsFilled: !checklist.bankDetailsFilled })
                }
                className="mr-2"
              />
              Fill Bank Details
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={checklist.trainingCompleted}
                onChange={() =>
                  setChecklist({ ...checklist, trainingCompleted: !checklist.trainingCompleted })
                }
                className="mr-2"
              />
              Complete Orientation Training
            </label>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HRPortal;

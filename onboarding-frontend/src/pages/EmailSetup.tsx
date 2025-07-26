import React from 'react';

const EmailSetup = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Email Setup Guide</h2>
      <p className="text-gray-600 mb-6">Step-by-step guide to get your work email up and running.</p>

      <ol className="list-decimal list-inside space-y-2">
        <li>Open Outlook or your preferred email client.</li>
        <li>Go to Account Settings and choose "Add Account".</li>
        <li>Enter your company email address and click "Next".</li>
        <li>Use the provided password or temporary login credentials.</li>
        <li>Follow the prompts to complete setup.</li>
        <li>Enable sync on mobile via Gmail or Outlook app.</li>
      </ol>
    </div>
  );
};

export default EmailSetup;

import React from 'react';

const KnowledgeBase = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Knowledge Base</h1>

    <p className="mb-4 text-gray-700">
      Find articles and documentation to help you get your work done efficiently.
    </p>

    <ul className="list-disc pl-6 space-y-2 text-gray-800">
      <li><strong>Onboarding Guide:</strong> Learn how to set up your system, tools, and workspace as a new employee.</li>
      <li><strong>Using Slack Effectively:</strong> Communication best practices and channel organization.</li>
      <li><strong>Git Workflow:</strong> Standard process for creating branches, commits, and pull requests.</li>
      <li><strong>Deployment Process:</strong> Step-by-step guide for staging and production deployments.</li>
      <li><strong>Performance Reviews:</strong> How reviews work, tips for self-evaluation, and timelines.</li>
    </ul>
  </div>
);

export default KnowledgeBase;

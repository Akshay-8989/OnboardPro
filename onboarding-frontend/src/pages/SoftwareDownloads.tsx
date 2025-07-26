import React from 'react';

const tools = [
  { name: "Visual Studio Code", link: "https://code.visualstudio.com/download" },
  { name: "Slack", link: "https://slack.com/downloads/" },
  { name: "Zoom", link: "https://zoom.us/download" },
  { name: "Notion", link: "https://www.notion.so/desktop" },
];

const SoftwareDownloads = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Software Downloads</h2>
      <p className="text-gray-600 mb-6">Download approved tools for your work.</p>

      <ul className="space-y-3">
        {tools.map(tool => (
          <li key={tool.name}>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {tool.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftwareDownloads;

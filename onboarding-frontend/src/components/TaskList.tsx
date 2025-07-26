import React from 'react';

const TaskList = () => {
  const tasks = [
    { title: 'Submit ID Proof', status: 'Completed' },
    { title: 'Upload PAN Card', status: 'Pending' },
    { title: 'Watch Orientation Video', status: 'Pending' },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className={`flex justify-between p-2 rounded ${
              task.status === 'Completed' ? 'bg-green-100' : 'bg-yellow-100'
            }`}
          >
            <span>{task.title}</span>
            <span className="text-sm font-medium">{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

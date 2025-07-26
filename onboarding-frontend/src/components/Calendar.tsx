import React from 'react';

const Calendar = () => {
  const events = [
    { date: 'July 25', title: 'Orientation - 10:00 AM' },
    { date: 'July 27', title: 'Team Intro Session' },
    { date: 'Aug 1', title: 'Project Kickoff' },
  ];

  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
      <ul className="space-y-2">
        {events.map((event, idx) => (
          <li key={idx} className="flex justify-between text-sm">
            <span>📅 {event.date}</span>
            <span>{event.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;

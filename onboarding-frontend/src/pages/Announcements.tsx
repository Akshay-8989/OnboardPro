import React from 'react';

const Announcements = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Latest Announcements</h1>

    <ul className="space-y-4 text-gray-800">
      <li>
        <h3 className="font-semibold">🎉 Annual Company Meetup – 15th August</h3>
        <p>Join us for a day of networking, workshops, and fun at our Pune HQ. RSVP by August 5th.</p>
      </li>
      <li>
        <h3 className="font-semibold">📢 New Health Insurance Provider from September</h3>
        <p>We’ve partnered with ICICI Lombard to offer better coverage and cashless claims.</p>
      </li>
      <li>
        <h3 className="font-semibold">🧑‍💻 Internship Program 2025 Applications Open</h3>
        <p>Encourage referrals for final year engineering students for our paid winter internship program.</p>
      </li>
    </ul>
  </div>
);

export default Announcements;

import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';

interface Ticket {
  _id?: string;
  employeeId?: string;
  subject: string;
  description: string;
  status?: string;
  createdAt?: string;
}

const ITSupport = () => {
  const [ticketForm, setTicketForm] = useState<Ticket>({
  subject: '',
  description: '',
  employeeId: 'emp123', // ✅ dummy value to avoid 400 error
});


  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLog, setChatLog] = useState<string[]>([]);

  // Fetch tickets on component mount
  const fetchTickets = async () => {
    try {
      const res = await axiosInstance.get<Ticket[]>('/api/tickets');
      setTickets(res.data);
    } catch (err) {
      console.error('Failed to fetch tickets:', err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleTicketChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTicketForm({ ...ticketForm, [e.target.name]: e.target.value });
  };

  const submitTicket = async () => {
    if (!ticketForm.subject.trim() || !ticketForm.description.trim()) {
      return alert('Subject and Description are required!');
    }

    try {
      const res = await axiosInstance.post<Ticket>('/api/tickets', ticketForm);
      setTickets((prev) => [...prev, res.data]);

      // Reset form
      setTicketForm({
        subject: '',
        description: '',
        employeeId: '',
      });
    } catch (err) {
      console.error('Ticket submission failed:', err);
      alert('Ticket submission failed. See console for details.');
    }
  };

  const handleChat = () => {
    const userMsg = chatInput.trim();
    if (!userMsg) return;

    let response = 'Sorry, I didn’t understand that.';
    if (/reset password/i.test(userMsg)) {
      response = 'To reset your password, go to the internal portal and click "Forgot Password".';
    } else if (/vpn/i.test(userMsg)) {
      response = 'Ensure FortiClient VPN is installed and use your credentials to log in.';
    }

    setChatLog((prev) => [...prev, `👤 You: ${userMsg}`, `🤖 Bot: ${response}`]);
    setChatInput('');
  };

  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">IT Support Portal</h2>

      {/* Raise Ticket */}
      <section className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-2">Raise a Support Ticket</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="subject"
            placeholder="Subject"
            value={ticketForm.subject}
            onChange={handleTicketChange}
            className="p-2 border rounded"
          />
          <textarea
            name="description"
            placeholder="Describe the issue"
            value={ticketForm.description}
            onChange={handleTicketChange}
            className="p-2 border rounded col-span-2"
          />
          <button
            onClick={submitTicket}
            className="bg-blue-600 text-white px-4 py-2 rounded col-span-2"
          >
            Submit Ticket
          </button>
        </div>
      </section>

      {/* Ticket History */}
      {tickets.length > 0 && (
        <section className="bg-white p-4 rounded shadow mb-6">
          <h3 className="text-xl font-semibold mb-2">Your Tickets</h3>
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Subject</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket._id}>
                  <td className="p-2 border">{ticket.subject}</td>
                  <td className="p-2 border">{ticket.description}</td>
                  <td className="p-2 border">{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Knowledge Base */}
      <section className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Password Reset:</strong> Use the internal portal's "Forgot Password" feature.</li>
          <li><strong>VPN Setup:</strong> Install FortiClient VPN and connect using your credentials.</li>
          <li><strong>Email Access:</strong> Use Outlook Web Access (OWA) with your company email.</li>
        </ul>
      </section>

      {/* Chat Bot */}
      <section className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-2">Quick Help Chat</h3>
        <div className="border p-2 h-48 overflow-y-scroll bg-gray-50 mb-2 rounded">
          {chatLog.map((msg, idx) => (
            <div key={idx} className="mb-1">{msg}</div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleChat()}
            placeholder="Ask something like 'reset password'"
            className="p-2 border rounded flex-grow"
          />
          <button onClick={handleChat} className="bg-green-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </section>
    </div>
  );
};

export default ITSupport;

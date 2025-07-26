const Ticket = require('../models/Ticket');

exports.createTicket = async (req, res) => {
  try {
    const { subject, description, priority, userId } = req.body;
    const ticket = await Ticket.create({ subject, description, priority, createdBy: userId });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('createdBy', 'name email').sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

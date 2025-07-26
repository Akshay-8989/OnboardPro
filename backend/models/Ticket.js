const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  employeeId: {
  type: String,
  required: true
}
,
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Resolved"],
    default: "Open"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;

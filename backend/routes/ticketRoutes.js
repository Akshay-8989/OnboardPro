const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// Create a new ticket
router.post("/", async (req, res) => {
  try {
    const { employeeId, subject, description } = req.body;

    // Log incoming request
    console.log("📥 Ticket submission request:", req.body);

    // Simple validation
    if (!employeeId || !subject || !description) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create and save the new ticket
    const newTicket = new Ticket({ employeeId, subject, description });
    const savedTicket = await newTicket.save();

    res.status(201).json(savedTicket);
  } catch (err) {
    console.error("❌ Ticket creation error:", err);
    res.status(500).json({ message: "Failed to create ticket", error: err.message });
  }
});

// Get all tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    console.error("❌ Failed to fetch tickets:", err);
    res.status(500).json({ message: "Failed to fetch tickets" });
  }
});

module.exports = router;

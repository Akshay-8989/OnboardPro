// controllers/employeeController.js
const User = require('../models/User');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({}, 'name email role'); // show these fields
    res.json(employees);
  } catch (err) {
    console.error('❌ Error fetching employees:', err.message);
    res.status(500).json({ message: 'Failed to fetch employees' });
  }
};

module.exports = { getAllEmployees };

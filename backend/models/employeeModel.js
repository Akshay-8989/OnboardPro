const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String },
  department: { type: String },
  email: { type: String, required: true, unique: true }, // optional, depending on your app
  password: { type: String }, // if using auth
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;

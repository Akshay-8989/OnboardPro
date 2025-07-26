const Leave = require('../models/Leave');

// Submit leave request
exports.submitLeave = async (req, res) => {
  try {
    const { fromDate, toDate, reason } = req.body;

    const leave = new Leave({
      user: req.user.id,
      fromDate,
      toDate,
      reason,
    });

    await leave.save();
    res.status(201).json({ message: 'Leave request submitted', leave });
  } catch (err) {
    console.error('❌ Submit Leave Error:', err.message);
    res.status(500).json({ message: 'Failed to submit leave request' });
  }
};

// Get leave requests for logged-in user
exports.getMyLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find({ user: req.user.id }).populate('user', 'name email');
    res.json(leaves);
  } catch (err) {
    console.error('❌ My Leaves Error:', err.message);
    res.status(500).json({ message: 'Failed to fetch your leave requests' });
  }
};

// Admin: Get all leave requests
exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate('user', 'name email');
    res.json(leaves);
  } catch (err) {
    console.error('❌ All Leaves Error:', err.message);
    res.status(500).json({ message: 'Failed to fetch leave requests' });
  }
};

// Admin: Approve or reject leave
exports.updateLeaveStatus = async (req, res) => {
  try {
    const { leaveId } = req.params;
    const { status } = req.body;

    if (!['Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const leave = await Leave.findByIdAndUpdate(leaveId, { status }, { new: true });
    if (!leave) {
      return res.status(404).json({ message: 'Leave request not found' });
    }

    res.json({ message: `Leave ${status}`, leave });
  } catch (err) {
    console.error('❌ Update Leave Status Error:', err.message);
    res.status(500).json({ message: 'Failed to update leave status' });
  }
};

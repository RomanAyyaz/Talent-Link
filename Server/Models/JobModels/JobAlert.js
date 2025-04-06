const mongoose = require('mongoose');

const jobAlertSchema = new mongoose.Schema({
  jobType: String,
  email: String,
  frequency: { type: String, default: 'daily' },
  createdAt: { type: Date, default: Date.now },
});

let JobAlert = mongoose.model('JobAlert', jobAlertSchema);

module.exports =  JobAlert
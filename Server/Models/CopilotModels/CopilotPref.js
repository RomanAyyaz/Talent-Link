const mongoose = require('mongoose');

const PrefSchema = new mongoose.Schema({
  user:       { type: mongoose.Schema.Types.ObjectId, ref:'User', unique:true },
  // keywords:   { type: [String], default: [] },
  jobTypes:   { type: [String], default: [] },
  locations:  { type: [String], default: [] },
  jobTitiles:   { type: [String], default: [] },
  // salaryMin:  { type: Number,   default: 0 },
  // categories: { type: [String], default: [] },
  autoApply:  { type: Boolean,  default: true },
  isRemote:  { type: Boolean,  default: true },
});

const Pref = mongoose.model('CopilotPreference', PrefSchema);

module.exports = Pref
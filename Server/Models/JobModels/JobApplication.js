const mongoose = require('mongoose');

let JobApplicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },

    resume:{
        type:String,
    },

    coverLetter:{
        type:String,
    },

    status: {
        type: String,
        enum: [
          'applied',
          'shortlisted',
          'hr_round',
          'technical_round',
          'final_round',
          'selected',
          'rejected',
        ],
        default: 'applied',
      },
      pipelineStages: [
        {
            name: { type: String, required: true },
            status: { type: String, enum: ['pending', 'in-progress', 'completed' , 'upcoming'], default: 'pending' },
            date: { type: Date },
            feedback: { type: String },
            interviewer: { type: String },
        }
    ],

    appliedAt:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

let JobApplication = mongoose.model('jobApplication',JobApplicationSchema)

module.exports = JobApplication
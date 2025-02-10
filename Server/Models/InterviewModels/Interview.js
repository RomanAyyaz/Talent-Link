const mongoose = require('mongoose')

const interviewSchema = new mongoose.Schema({
    interviewType:{
      type:String,
    //   required:true  
    },
    interviewDate:{
        type:String,
      //   required:true  
      },
      interviewTime:{
        type:String,
      //   required:true  
      },
      interviewExpectations:{
        type:String,
      //   required:true  
      },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, { timestamps: true })


const Interview = mongoose.model('interview', interviewSchema)

module.exports = Interview
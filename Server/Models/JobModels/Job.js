const  mongoose  = require('mongoose')


const jobSchema = new mongoose.Schema({

},{timestamps:true})


let Job = mongoose.model('job',jobSchema)
module.exports =  Job
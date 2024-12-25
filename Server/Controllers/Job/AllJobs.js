const Job = require('../../Models/JobModels/Job')

const allJobs = async(req,res)=>{
    try {
        let jobData = await Job.find();
        return res.status(200).json({jobData:jobData})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports = {
    allJobs
}
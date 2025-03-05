const JobApplication = require('../../Models/JobModels/JobApplication')
const candidateJobData = async (req, res) => {
    let { candidateId, jobId } = req.params;
    try {
        let candidateJobData = await JobApplication.find({ $and:[
        {jobId : jobId},
        {userId : candidateId}    
        ] }).populate('userId');
        if (!candidateJobData) {
            res.status(404).json({ message: "There is no candidate data" })
        }
        return res.status(200).json({ data: candidateJobData })
    } catch (error) {
        return res.status(501).json({ error: error, message: error.message })
    }
}

module.exports = {
    candidateJobData
}
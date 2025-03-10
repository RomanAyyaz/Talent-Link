const JobApplication = require('../../Models/JobModels/JobApplication')
const User = require('../../Models/UserModels/User');
const sendShortlistedEmail = require('../../Utils/ShortListEmail')
const rejectedEmail = require('../../Utils/RejectedEmail')
let updatePipeline = async (req, res) => {
    try {

        const { jobId } = req.params;
        const { userId } = req.params;
        const {status  , name } = req.body

        const application = await JobApplication.findOne({ userId, jobId });
        const userData = await User.findById(userId)

        if(!userData){
            return res.status(404).json({ error:'No user data has been found' });
        }
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

       const interviewData = application.pipelineStages.filter((data)=>{
          return data.name === name
       })
       interviewData[0].status = status

       await application.save()
       
        return res.status(200).json({
            message: 'Status has been updated successfully',
            application
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = {
    updatePipeline
}
const JobApplication = require('../../Models/JobModels/JobApplication')
const User = require('../../Models/UserModels/User');
const sendShortlistedEmail = require('../../Utils/ShortListEmail')
const rejectedEmail = require('../../Utils/RejectedEmail')
let updateJobStatus = async (req, res) => {
    try {

        const { jobId } = req.params;
        const { userId } = req.params;
        const {status} = req.body
        const application = await JobApplication.findOne({ userId, jobId });
        const userData = await User.findById(userId)
        if(!userData){
            return res.status(404).json({ error:'No user data has been found' });
        }
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        application.status = status;
        await application.save();
         // Sending ShortListed email
         const email = userData.email
         const fullname = userData.fullname

         if(status === 'shortlisted') {
            await sendShortlistedEmail(email, fullname);
         }
         if(status === 'rejected'){
            await rejectedEmail(email, fullname);
         }
       
        return res.status(200).json({
            message: 'Candidate has been shortlisted successfully',
            application
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server Error' });
    }
};

module.exports = {
    updateJobStatus
}
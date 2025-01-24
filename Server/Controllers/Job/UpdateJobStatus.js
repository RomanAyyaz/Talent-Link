const JobApplication = require('../../Models/JobModels/JobApplication')

let updateJobStatus = async (req, res) => {
    try {

        const { jobId } = req.params;
        const { userId } = req.params;
        const application = await JobApplication.findOne({ userId, jobId });
        if (!application) {
            return res.status(404).json({ error: 'Application not found' });
        }

        application.status = 'shortlisted';
        await application.save();

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
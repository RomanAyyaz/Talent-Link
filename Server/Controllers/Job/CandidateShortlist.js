const JobApplication = require('../../Models/JobModels/JobApplication');

const  candidateShortlist = async (req, res) => {
    try {
        let candidateJobData = await JobApplication.find({
            status: 'shortlisted'
        }).populate('userId');

        if (!candidateJobData || candidateJobData.length === 0) {
            return res.status(404).json({ message: "There is no candidate data" });
        }

        return res.status(200).json({ data: candidateJobData });
    } catch (error) {
        return res.status(501).json({ error: error, message: error.message });
    }
};

module.exports = {
    candidateShortlist
};

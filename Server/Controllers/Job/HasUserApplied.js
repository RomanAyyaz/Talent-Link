const JobApplication = require('../../Models/JobModels/JobApplication');

let hasUserApplied = async (req, res) => {
    try {
        const { userId, jobId } = req.params;
        const existingApplication = await JobApplication.findOne({ userId, jobId });
        if (existingApplication) {
            return res.status(200).json({ success: true, applied: true });
        } else {
            return res.status(200).json({ success: true, applied: false });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    hasUserApplied
}

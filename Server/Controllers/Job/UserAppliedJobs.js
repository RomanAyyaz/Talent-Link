const JobApplication = require('../../Models/JobModels/JobApplication')

let UserAppliedJobs = async (req, res) => {
    let { userId } = req.params;
    try {
        let appliedJobsData = await JobApplication.find({ userId: userId }).populate({
            path: 'jobId',   
            model: 'job'   
        });
        if (!appliedJobsData || appliedJobsData.length === 0) {
            console.log("No applied jobs found for this user");
            return res.status(404).json({ message: "There is no candidate applied job data" });
        }
        return res.status(200).json({ data: appliedJobsData });
    } catch (error) {
        console.error("Error fetching applied jobs:", error.message); 
        return res.status(501).json({ error: error.message });
    }
}


module.exports = {
    UserAppliedJobs
}
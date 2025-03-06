const JobApplication = require('../../Models/JobModels/JobApplication');

const scheduleInterview = async (req, res) => {
    let { candidateId, jobId } = req.params;
    let { date, interviewer, name, status } = req.body;

    try {
        let candidateJobData = await JobApplication.findOne({ 
            jobId: jobId, 
            userId: candidateId 
        });

        if (!candidateJobData) {
            return res.status(404).json({ message: "There is no candidate data" });
        }

        // Update the specific pipeline stage
        let updated = false;
        candidateJobData.pipelineStages.forEach((stage) => {
            if (stage.name === name) {
                stage.date = date;
                stage.interviewer = interviewer;
                stage.status = status;
                updated = true;
            }
        });

        if (!updated) {
            return res.status(404).json({ message: `Stage '${name}' not found` });
        }

        // Explicitly mark `pipelineStages` as modified
        candidateJobData.markModified('pipelineStages');

      

        // Save the updated document
        await candidateJobData.save();

       

        return res.status(200).json({ message: "Pipeline stage updated successfully", data: candidateJobData });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    scheduleInterview
};

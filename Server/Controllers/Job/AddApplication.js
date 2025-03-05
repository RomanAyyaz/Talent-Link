const  JobApplication = require('../../Models/JobModels/JobApplication')
const defaultPipelineStages = [
  { name: "Application Screening", status: "pending", date: null, feedback: "To Be given", interviewer: "TBA" },
  { name: "Technical Assessment", status: "pending", date: null, feedback: "To Be given", interviewer: "TBA"},
  { name: "Technical Interview", status: "pending", date: null, feedback: "To Be given", interviewer: "TBA" },
  { name: "Team Interview", status: "pending", date: null, feedback: "To Be given", interviewer: "TBA" },
  { name: "Final Interview", status: "pending", date: null, feedback: "To Be given", interviewer: "TBA" },
];
 let addApplication = async (req, res) => {
    const { jobId, userId, resume, coverLetter } = req.body;
    try {
      const newApplication = new JobApplication({
        jobId,
        userId,
        // resume,
        coverLetter,
        pipelineStages: defaultPipelineStages
      });
      await newApplication.save()
      res.status(201).json({newApplication,message:"Job Application added Successfully"});
    } catch (error) {
        console.error("Error saving application:", error);
        res.status(500).json({ message: "Failed to save application", error });
    }
  };
  

module.exports = {
    addApplication
}
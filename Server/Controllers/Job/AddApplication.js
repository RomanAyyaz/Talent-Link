const  JobApplication = require('../../Models/JobModels/JobApplication')
const Notification = require('../../Models/NotificationModel/Notification')

const defaultPipelineStages = [
  { name: "Application Screening", status: "upcoming", date: null, feedback: "To Be given", interviewer: "TBA" },
  { name: "Technical Assessment", status: "upcoming", date: null, feedback: "To Be given", interviewer: "TBA"},
  { name: "Technical Interview", status: "upcoming", date: null, feedback: "To Be given", interviewer: "TBA" },
  { name: "Team Interview", status: "upcoming", date: null, feedback: "To Be given", interviewer: "TBA" },
  { name: "Final Interview", status: "upcoming", date: null, feedback: "To Be given", interviewer: "TBA" },
];

 let addApplication = async (req, res) => {

    const { jobId, userId, resume, coverLetter  , companyId} = req.body;

    try {
      const newApplication = new JobApplication({
        jobId,
        userId,
        companyId,
        // resume,
        coverLetter,
        pipelineStages: defaultPipelineStages
      });

      await newApplication.save()

      //New notification 

      const notification = new Notification({
        recipientId: companyId,
        senderId: userId,
        type: 'job_application',
        jobId,
        message: `A student has applied for your job`,
      });
      await notification.save();
      
      res.status(201).json({newApplication,message:"Job Application added Successfully"});

    } catch (error) {
        console.error("Error saving application:", error);
        res.status(500).json({ message: "Failed to save application", error });
    }
  };
  

module.exports = {
    addApplication
}
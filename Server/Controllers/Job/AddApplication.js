const  JobApplication = require('../../Models/JobModels/JobApplication')
 let addApplication = async (req, res) => {
    const { jobId, userId, resume, coverLetter } = req.body;
    try {
      const newApplication = new JobApplication({
        jobId,
        userId,
        // resume,
        coverLetter,
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
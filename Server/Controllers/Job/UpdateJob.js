const Job = require('../../Models/JobModels/Job')
const updateJob = async (req,res) =>{
    let {id} = req.params;
    let {jobTitle,jobDescription,workingSchedule, workingDays , salaryMin ,
        salaryMax , experience ,  qualification , employmentType , location

    } = req.body;
    try {
        let jobData= await Job.findByIdAndUpdate(id,{
            jobTitle,jobDescription,workingSchedule, workingDays , salaryMin ,
            salaryMax , experience ,  qualification , employmentType , location 
        },{new:true})
        if (!jobData) {
            return res.status(404).json({ message: 'Job  not found' });
        }
        return res.status(200).json(jobData)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    updateJob
}